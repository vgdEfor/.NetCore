import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { DtColumnItem, SortDirection } from './models/dt-column-item';
import { FilterFormatType, FilterOpType } from './models/dt-filter-item';
import { DestroySubscriptionsDirective } from 'src/app/shared/models/_basic/destroy-subscriptions';
import { FilterItem } from './models/dt-filter-item';
import { debounceTime } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DtCheckboxConfig } from './models/config/dt-checkbox-config';
import * as moment from 'moment';
import { DtActionButton, DtActionColumnButton } from './models/dt-action-button';
import { DtBodyDataPipe } from './internal-pipes/dt-body-data/dt-body-data.pipe';

@Component({
  selector: 'app-ep-datatable',
  templateUrl: './ep-datatable.component.html',
  styleUrls: ['./ep-datatable.component.scss']
})
export class EpDatatableComponent<TRowItem = any> extends DestroySubscriptionsDirective implements OnInit {
  _dummySortDirection = { ...SortDirection };

  @Input() paginate = true;

  @Input() labelPaginationPrev = '<';
  @Input() labelPaginationNext = '>';
  @Input() labelNoData = 'No data for this search';

  @Input() actionButtonsPosition: 'left' | 'right' | 'center' = 'left';
  @Input() actionButtonShowRefresh = true;
  @Input() actionButtonShowFilter = true;
  @Input() actionButtons: DtActionButton<TRowItem>[] = [];

  @Input() cssClassPagination = 'pagination-sm';
  @Input() cssClassTable = 'table table-sm table-striped table-hover border mb-1';
  @Input() cssClassTHead = '';
  @Input() cssClassTBody = '';
  @Input() cssClassTBodyRowProperty = '_rowCssClass';
  @Input() set itemRowClassProperty(value: string) {
    console.warn('[itemRowClassProperty] is deprecated. Use [cssClassTBodyRowProperty] instead.')
    if (value === this.cssClassTBodyRowProperty) return;
    this.cssClassTBodyRowProperty = value;
  }

  @Input() id = uuid();
  @Input() debounceTimeMs = 500;
  @Input() launchOnStartup = true;
  _isLoading = false;
  
  _chkGlobalId = uuid();
  _chkGlobalIsChecked = false;
  /** Whether if the "select all" checkbox should be shown. */
  @Input() checkboxGlobalShow = true;
  get itemsChecked() {
    if (!this.checkboxShow || this.checkboxConfig.disabled) { return []; }
    return this.items
      .filter(i => !this.checkboxConfig.disabledProperty || !i[this.checkboxConfig.disabledProperty])
      .filter(i => i[this.checkboxConfig.selectedProperty] === this.checkboxConfig.selectedValueChecked);
  }
  @Input() checkboxShow = false;
  @Input() set checkboxConfig(value: Partial<DtCheckboxConfig>) {
    this._checkboxConfig.setData(value);
  }
  get checkboxConfig() { return this._checkboxConfig; }
  protected _checkboxConfig = new DtCheckboxConfig();

  @Input() columns: DtColumnItem<TRowItem>[] = [];
  @Input() extraFilters: FilterItem[] = [];
  @Input() initFilters: FilterItem[] = [];
  @Input() isFilterShown = false;

  //#region Pagination data
  @Input() paginationId = `dt-pagination-${uuid()}`;
  @Input() pagination = true;
  @Input() paginationMaxElements = 10;
  @Input() pIndex = 0;
  @Input() pSize = 10;
  @Input() pSizeCanChange = false;
  @Input() pSizeLabel = 'LabelPaginatorPageSize';
  @Input() totalLength = 0;
  // nav
  @Input() isNavPaginator = false;
  /**
   * For Navision pagination. The value that will be sent to the API.
  */
  private navFirstBookmark = '';
  @Input() pBookmark: string;
  @Input() pBookmarkKeyNext: string;
  @Input() pBookmarkKeyPrev: string;
  private isPSizePrevious = false;
  //#endregion

  /** Name of the property that will be used to track ngFor loops */
  @Input() itemsTrackByPropertyName: string = '__trackBy';
  /** Input item array. url must be empty for this to work */
  @Input() items: TRowItem[] = [];
  /** Rendered items at HTML */
  _displayedItems: TRowItem[] = [];

  /** 
   * The url where data is stored. Params & filter items will be sent, as a POST request.
   * Please refer to `dataGetterFn` if you need more customization
   */
  @Input() urlData: string = null;
  @Input() urlDataParams: { [key: string]: string } = {};
  /** Promise that will either resolve or reject the call. It's usefull if you want to setup a complex API call. */
  @Input() dataGetterFn: DtDataGetterFn<TRowItem> = null;
  /** Executed just before the data filter is performed or requested. Return `false` to halt the execution. */
  @Input() dataGetterMiddleware: (queryParams: { [key: string]: string }, filters: FilterItem[]) => boolean;

  /** Emitted when the datatable is about to request the items to the source */
  @Output() reloadData = new EventEmitter<{ queryParams: { [key: string]: string }, filters: FilterItem[] }>();
  /** Emitted when the datatable has finished rquesting and renderizing the data from the source */
  @Output() reloadDataFinished = new EventEmitter<DtApiResponse<TRowItem>>();

  private lastUrlRequestId: string = null;
  private debounce = new EventEmitter<void>();
  constructor(
    public httpClient: HttpClient,
    public bodyPipe: DtBodyDataPipe,
  ) {
    super();
  }

  ngOnInit() {
    this.initListeners();
    this.refreshData(true);
  }

  onBtnColumnClick(ev: MouseEvent, btn: DtActionColumnButton<TRowItem, any>, row: any, column: DtColumnItem<TRowItem>) {
    if (btn.onClick) {
      const field = this.bodyPipe.getDataItem(row, column.field, column, false);
      const fieldDsplay = this.bodyPipe.getDataItem(row, column.fieldDisplay, column, false);
      btn.onClick(ev, this, row, field, fieldDsplay, column);
    }
  }
  onBtnActionClick(ev: MouseEvent, btn: DtActionButton<TRowItem>) {
    if (btn.onClick) {
      btn.onClick(ev, this._displayedItems, this._checkboxConfig);
    }
  }

  refreshData(instant = false) {
    this.loadData(instant);
  }


  changePage_Nav(pMarkKey: string, isPrevious = false) {
    if (isPrevious == null) { isPrevious = false; }

    this.isPSizePrevious = isPrevious;
    this.pBookmark = pMarkKey;

    this.refreshData(true);

  }

  /** @todo Make it multi-field capable */
  sortByColumn(column: DtColumnItem) {
    if (!column.sort) return;

    for (const c of this.columns) if(c !== column) c.isSorting = false;

    if (!column.isSorting) column.isSorting = true;
    else if (column.sortDirection === SortDirection.Ascendent) column.sortDirection = SortDirection.Descendent;
    else column.sortDirection = SortDirection.Ascendent;

    this.refreshData(true);
  }

  tableRowTrackBy(index: number, rowItem: TRowItem) {
    return rowItem[this.itemsTrackByPropertyName];
  }

  chkGlobalChange(event: MouseEvent) {
    if (!event.isTrusted) { return; }
  }

  onFilterValue(item: DtColumnItem<TRowItem>) {
    // // Clean duplicated filters. Might wanna clean this in a future -_-
    // const filters = this.buildFilters();
    // const existing = filters
    //   // Is field the same? Get the index. if not, get null.
    //   .map((v, i) => { if (v.field === item.field) { return i; } return null; })
    //   // We are only interested in indexes.
    //   .filter(fi => fi != null)
    //   // sorted desc, so we can delete an element without mutating the other indexes
    //   .sort((a, b) => b - a);
    // existing.forEach(fi => {
    //   filters.splice(fi, 1);
    // });

    // this.filters.push(item.getFilterItem());
    // this.callbackItem.filters = this.filters;

    this.refreshData(false);
  }

  private getItems() {
    // Ignore the call if it's the very first time
    // and launchOnStartup !== true.
    if (!this.launchOnStartup) {
      this.launchOnStartup = true;
      return;
    }
    // Set as Loading
    this._isLoading = true;
    // Build params & filters
    const queryParams = this.buildQueryParams();
    const filters = this.buildFilters();
    const shouldContinue = this.dataGetterMiddleware == null || this.dataGetterMiddleware(queryParams, filters);
    // If the middleware specifies that the code should not continue,
    // stop the execution.
    if (!shouldContinue) return;
    // Generate a requestId.
    // This will be used when the request is finished,
    // so the data don't get overlapped by slower async responses
    // that have been previously called and have not get an answer yet
    const contextRequestId = uuid();
    this.lastUrlRequestId = contextRequestId;

    // Item getter task
    let task: DtDataGetterFn<TRowItem> = null;
    // Item get priority: getter function > api > items
    if (this.dataGetterFn) task = this.dataGetterFn;
    else if (this.urlData) task = this.getItemsFromApi;
    else task = this.getItemsFromLocal;
    // Call the task
    task(queryParams, filters)
      .then((response) => {
        // If it's the latest call, then assign the items.
        // We also assign the trackBy property so that the ngFor
        // function refreshes the view.
        if (contextRequestId === this.lastUrlRequestId) {
          this.totalLength = response.total;

          this.recalculateChkboxGlobal();
          this.reloadDataFinished.next(response);
          this.setTrackBy(contextRequestId, response.items);

          this._displayedItems = response.items;
          this.items = response.items;
        }
        // If it's the latest call, tell the UI we are done
        // requesting and filtering the data
      }).finally(() => {
        if (contextRequestId === this.lastUrlRequestId) {
          this._isLoading = false;
        }
      });
  }

  private buildFilters() {
    const filters = this.columns
      .filter(c => c.filter && c.filterItem)
      .filter(c => c.filterItem.value != null && c.filterItem.value !== '')
      .map(c => { c.filterItem.field = c.field; return <FilterItem>c.filterItem; });
    return filters.concat(this.extraFilters).concat(this.initFilters);
  }
  private buildQueryParams() {
    if (this.urlDataParams == null) { this.urlDataParams = {}; }

    const sortables = this.columns
      .filter(s => s.sort && s.isSorting);
    let sortName = (sortables[0] || {}).field || '';
    let sortIsDescending = (sortables[0] || {}).sortDirection === SortDirection.Descendent;

    // TODO: Implement multiple sorts.
    // if (sortables.length > 1) {
    //   sortName = sortables
    //     .map(s => s.field)
    //     .join(',');
    // }
    
    let dtParams: any = {
      pi: this.pIndex,
      ps: this.pSize,
      sn: sortName,
      sd: sortIsDescending,
    };

    if (this.isNavPaginator) {
      dtParams.bm = this.pBookmark;
      if (this.isPSizePrevious) { dtParams.ps = (-1 * (Math.abs(dtParams.ps))); }
    }
    dtParams = Object.assign(dtParams, this.urlDataParams);

    return dtParams;
  }

  private getItemsFromLocal(queryParams: { [key: string]: string }, filters: FilterItem[]) {
    return new Promise<DtApiResponse<TRowItem>>((resolve) => {
      const result = new DtApiResponse<TRowItem>();
      result.pageIndex = this.pIndex;
      result.pageSize = this.pSize;

      const items = this.items.filter((i) => this.isInFilter(filters, i));
      result.total = this.items.length;
      result.items = items;

      resolve(result);
    });
  }
  private getItemsFromApi(queryParams: { [key: string]: string }, filters: FilterItem[]) {
    return new Promise<DtApiResponse<TRowItem>>((resolve) => {
      this.callApi(queryParams, filters).then((collectionList) => {
        if (this.isNavPaginator) {
          const firstItem = this.items[0];
          this.pBookmarkKeyPrev = (this.pBookmark && firstItem && firstItem['key']) || '';
          if (!this.pBookmark) {
            this.navFirstBookmark = firstItem && firstItem['key'];
          } else if (this.pBookmarkKeyPrev === this.navFirstBookmark) {
            this.pBookmarkKeyPrev = '';
          }
          this.pBookmarkKeyNext = (this.pSize !== 0 && (Math.abs(collectionList.total) === Math.abs(this.pSize)) && this.items[this.items.length - 1]['key']) || '';
        }

        resolve(collectionList);
      });
    })
  }

  recalculateChkboxGlobal() {
    let isChecked = false;
    if (!this.checkboxConfig.disabled) {
      const totalItemsCheckable = this.items
        .filter(i => !this.checkboxConfig.disabledProperty || !i[this.checkboxConfig.disabledProperty])
        .length;
      const totalItemsChecked = this.itemsChecked
        .length;

      isChecked = totalItemsCheckable === totalItemsChecked;
    }

    this._chkGlobalIsChecked = isChecked;
  }
  
  private callApi(queryParams: { [key: string]: string }, filters: FilterItem[]) {
    const isNavPReverse = this.isPSizePrevious;
    return new Promise<DtApiResponse<TRowItem>>((resolve, reject) => {
      const optHeaders = new HttpHeaders()
        .append('ep-component', 'datable');
      this.httpClient.post(this.urlData, filters || [], {
        headers: optHeaders,
        params: queryParams,
        responseType: 'json',
        withCredentials: optHeaders.has('Authorization')
      }).subscribe((result: DtApiResponse<TRowItem>) => {
        let items = [];
        if (this.isNavPaginator && isNavPReverse) {
          for (const i of result.items) {
            items.unshift(i);
          }
        } else {
          items = result.items;
        }
        resolve({ items: items, total: result.total, pageIndex: result.pageIndex, pageSize: result.pageSize });
      }, (err) => {
        reject(err);
      });
    });
  }

  private setTrackBy(requestId: string | number, newRowItems: TRowItem[]) {
      for(let i = 0; i<newRowItems.length; i++) {
      const item = newRowItems[i];
      const trackId = item[this.itemsTrackByPropertyName];
      if (!trackId) {
        item[this.itemsTrackByPropertyName] = '' + requestId + '_' + i;
      }
    }
  }
  private loadData(instant: boolean = false) {
    if (instant) {
      this.getItems();
    } else {
      this.debounce.next();
    }
  }

  //#region IsInFilter
  private isInFilter(filters: FilterItem[], item: any) {
    for (let i = 0; i < filters.length; i++) {
      let isInFilter = true;
      const filter = filters[i];
      switch (filter.format) {
        case FilterFormatType.Guid:
        case FilterFormatType.String:
          isInFilter = this.isInFilterString(item, filter);
          break;
        case FilterFormatType.Literal:
          isInFilter = this.isInFilterLiteral(item, filter);
          break;
        case FilterFormatType.DateTime:
          isInFilter = this.isInFilterDateTime(item, filter);
          break;
        default:
          isInFilter = false;
      }
      if (!isInFilter) { return false; }
    }
    return true;
  }
  private isInFilterString(item: any, filter: FilterItem) {
    const val = (item || {})[filter.field] || '';
    if (filter.value == null || filter.value === '') { return true; }

    switch (filter.op) {
      case FilterOpType.Eq:
        // tslint:disable-next-line:triple-equals
        return (<string>val.toString()).toLowerCase() == (<string>filter.value.toString()).toLowerCase();
      case FilterOpType.Cn:
        return (<string>val.toString()).toLowerCase().indexOf((<string>filter.value.toString()).toLowerCase()) >= 0;
      case FilterOpType.Ne:
        return !this.isInFilterString(item, new FilterItem().setData({ field: filter.field, value: filter.value, op: FilterOpType.Eq, format: FilterFormatType.String }));
      case FilterOpType.Nc:
        return !this.isInFilterString(item, new FilterItem().setData({ field: filter.field, value: filter.value, op: FilterOpType.Cn, format: FilterFormatType.String }));
      default:
        // console.warn('Unsupported filter');
        return false;
    }
  }
  private isInFilterLiteral(item: any, filter: FilterItem) {
    if (filter.value == null || filter.value === '') { return true; }

    const val = Number((item || {})[filter.field] || 0);
    let valFilter = Number(filter.value);
    if (isNaN(valFilter)) { valFilter = 0; }

    switch (filter.op) {
      case FilterOpType.Eq:
      case FilterOpType.Cn:
      case FilterOpType.Ne:
      case FilterOpType.Nc:
        return this.isInFilterString(item, filter);

      case FilterOpType.Gt:
        return valFilter > val;
      case FilterOpType.Lt:
        return valFilter < val;
      case FilterOpType.Ge:
        return valFilter >= val;
      case FilterOpType.Le:
        return valFilter <= val;
      default:
        // console.warn('Unsupported filter');
        return false;
    }
  }
  private isInFilterDateTime(item: any, filter: FilterItem) {
    if (filter.value == null || filter.value === '') { return true; }
    if (!moment.isDate(filter.value) || !moment.isDate((item || {})[filter.field])) { return false; }

    const val = moment.utc((item || {})[filter.field]);
    const valFilter = moment.utc(filter.value);

    switch (filter.op) {
      case FilterOpType.Eq:
        return valFilter.isSame(val);
      case FilterOpType.Ne:
        return !valFilter.isSame(val);

      case FilterOpType.Gt:
        return valFilter.isAfter(val);
      case FilterOpType.Lt:
        return valFilter.isBefore(val);
      case FilterOpType.Ge:
        return valFilter.isSameOrAfter(val);
      case FilterOpType.Le:
        return valFilter.isSameOrBefore(val);
      default:
        // console.warn('Unsupported filter');
        return false;
    }
  }
  //#endregion

  private initListeners() {
    const s = this.debounce
      .pipe(debounceTime(this.debounceTimeMs))
      .subscribe(() => {
        this.getItems();
      });
    this.subs.push(s);
  }
}
export class DtApiResponse<TRowItem> {
  pageSize?: number;
  pageIndex?: number;
  items: TRowItem[] = [];
  total = 0;
}
export type DtDataGetterFn<TRowItem> = (queryParams: { [key: string]: string }, filters: FilterItem[]) => Promise<DtApiResponse<TRowItem>>;