import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DestroySubscriptions } from 'ax-toolbox';
import { FormUtilities } from 'src/app/shared/utils/form-utils';
import { ListComponent, MockupItem } from '../list/list.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends DestroySubscriptions implements OnInit, OnDestroy {

  _item: MockupItem = new MockupItem();
  _itemErrors: FormItemErrors = {};

  _isLoading = true;
  constructor(
    public cdRef: ChangeDetectorRef,
    public router: Router,
    public aRoute: ActivatedRoute,
    public translate: TranslateService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.initListeners();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  onBooleanCheckboxToggle(propertyName: string) {
    const isChecked = !this._item[propertyName];
    this._item[propertyName] = isChecked;
  }

  onDatepicketValueChange($event: Date, propertyName: string) {
    FormUtilities.onDatepicketValueChange(this._item, $event, propertyName, this.cdRef);
  }
  onTextNumberValueChange($event: Event, propertyName: string) {
    const newVal = (($event.target as HTMLInputElement).value || '')
      .toString()
      .replace('.', '')
      .replace(',', '.');
    let asNumber = Number(newVal);
    if (isNaN(asNumber)) { asNumber = this._item[propertyName]; }

    this._item[propertyName] = asNumber;
    // this.cdRef.detectChanges();
  }


  private initListeners(): void {
    this.initARouteListeners();
  }
  private initARouteListeners() {
    const parentS = this.aRoute.parent.url.subscribe((parentUrl) => {
      // Illegal navigation
      if (parentUrl[0] == null || !parentUrl[0].path) {
        this.goBack();
        return;
      }

      const childS = this.aRoute.paramMap.subscribe((data) => {
        this._item = new MockupItem();

        // New does not need ID.
        const id = data.get('id');
        if (parentUrl[0].path === 'new') {
          if (id) {
            this.goBack();
            return;
          }
          this._isLoading = false;
        } else {
          if (!id) {
            this.goBack();
            return;
          }
          this._item.setData({ id: id });

          this._isLoading = true;
          this.getById(id).then((item) => {
            // Concurrency check. User may have navigated
            // while data was being retrieved
            if (id === this._item.id) {
              this._isLoading = false;
              // 404
              if (item == null) {
                this.goBack();
                return;
              }
              // Assign details data
              this._item.setData(item);
            }
          });
        }
      });
      this.subs.push(childS);
    });

    this.subs.push(parentS);
  }

  async onBtnSave(ev: MouseEvent) {
    this._isLoading = true;

    let oldItem = await this.getById(this._item.id);
    if (oldItem == null) {
      oldItem = new MockupItem(true);
      this._item.id = oldItem.id;
      ListComponent.dtItems.push(oldItem);
    }

    setTimeout(async () => {
      oldItem.setData(this._item);
      await this.router.navigate(['/insurance/details/', this._item.id]);
      this._isLoading = false;
    }, 3000);
  }

  private async getById(id: string) {
    const item = ListComponent.dtItems.find((i) => i.id === id);
    return item;
  }
  private goBack() {
    this.router.navigate(['/insurance']);
  }
}

export type FormItemErrors = { [fieldId: string]: (string | string[]) };
