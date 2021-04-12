// AUTHOR: Axular Etxeguren Abascal @ 2020/05/25
// Easy Pack Datatable ColumnItem

import { SetData } from 'src/app/shared/models/_basic/set-data';
import { DtActionButton, DtActionColumnButton } from './dt-action-button';
import { DtFilterItem } from './dt-filter-item';

export class DtColumnItem<TRow = any, TCellValue = any> extends SetData<DtColumnItem<TRow, TCellValue>> {
    columnName = '';

    isBooleanFalseIcon = new ColumnItemIconDefinition().setData({ iconName: 'times', iconCssClass: 'text-danger' });
    isBooleanBooleanIcon = new ColumnItemIconDefinition().setData({ iconName: 'check', iconCssClass: 'text-success' });

    valueIcons: ColumnItemIconConfig<TCellValue>[] = [];

    /** The property name at the Row containing the value that will be used for internal operations */
    field: string = null;
    fieldCssClass: string;
    /** (Optional) Property name of the row containing the value that will be used for user display
     * (`field` will be used for internal operations) */
    fieldDisplay: string = this.field;
    /** CSS Class applid to the cell's wrapper `<div>` element */
    fieldDisplayWrapperClass: string;
    /** Type of the displayed data. Used to draw the data in a way or another */
    fieldDisplayType: FieldDisplayType;

    /** Value before the displayed value */
    fieldDisplayPreffix = '';
    /** Value after the displayed value */
    fieldDisplaySuffix = '';

    /** Middleware used to display the data as the desired way */
    fieldDisplayMiddleware: (displayedData: any, column: DtColumnItem<TRow, TCellValue>, rowData: TRow) => string;

    /** A middleware used to display the data at the cell when exported to a datasheet */
    fieldExcelExportMiddleware: (displayData: any, columnData: DtColumnItem<TRow, TCellValue>, rowData?: TRow) => string;


    filter = false;
    // filterType: EpDatatableFilterType;
    // filterOptions: LabelAndValue[] = [];
    // fiterOp: FilterOpType = FilterOpType.Cn;
    // filterFormat: FilterFormatType = FilterFormatType.String;
    filterItem = new DtFilterItem();

    /** Wether if the sorting function is enabled for this column */
    sort = false;
    /** True if the Datatable is currently sorting the data by this column */
    isSorting = false;
    sortDirection = SortDirection.Ascendent;

    buttons: DtActionColumnButton<TRow, TCellValue > [] =[];
    buttonWrapperClass = 'btn-group';

    thTHeadClass: string = null;

    constructor(
        baseData?: Partial<DtColumnItem<TRow, TCellValue>>
    ) {
        super();
        this.setData(baseData);
        
        this.init();
    }

    private init() {
        this.init_ValueIcons();
        this.init_Middleware();
        this.init_MiddlewareExportToDatasheet();
    }
    private init_ValueIcons() {
        if (this.valueIcons.length > 0) return;

        this.valueIcons = [
            new ColumnItemIconConfig<TCellValue>().setData({
                iconCssClass: this.isBooleanFalseIcon.iconCssClass,
                iconName: this.isBooleanFalseIcon.iconName,
                iconPreffix: this.isBooleanFalseIcon.iconPreffix,
                value: false as any,
                iconOnly: true,
            }),
            new ColumnItemIconConfig<TCellValue>().setData({
                iconCssClass: this.isBooleanBooleanIcon.iconCssClass,
                iconName: this.isBooleanBooleanIcon.iconName,
                iconPreffix: this.isBooleanBooleanIcon.iconPreffix,
                value: true as any,
                iconOnly: true,
            }),
        ];
    }
    private init_Middleware() {
        if (this.fieldDisplayMiddleware != null) return;

        this.fieldDisplayMiddleware = ((displayedData) => { return displayedData; });
    }
    private init_MiddlewareExportToDatasheet() {
        if (this.fieldExcelExportMiddleware != null) return;

        this.fieldExcelExportMiddleware = ((displayedData) => { return displayedData; });
    }

    refreshFilter() {
        
    }
}
/** @deprecated Use DtColumnItem<TRow, TCellValue> instead*/
export class ColumnItem extends DtColumnItem<any, any> implements SetData<ColumnItem> {
    /** @deprecated Use DtColumnItem<TRow, TCellValue> -> sort instead*/
    set sorted(value: boolean) { this.sort = value; }

    setData(newData: Partial<ColumnItem>) {
        return super.setData(newData);
    }
}
export class ColumnItemIconDefinition extends SetData<ColumnItemIconDefinition> {
    iconCssClass = '';
    iconPreffix = 'fas';
    iconName: string = null;
}
export class ColumnItemIconConfig<TValue = any> extends ColumnItemIconDefinition implements SetData<ColumnItemIconConfig> {
    /** If the cell's value matches this value, the icon will be displayed ( === will be used) */
    value: TValue;
    /** Wether the icon only should be shown if the value equals the cell's data */
    iconOnly = false;
    
    setData(newData: Partial<this>) {
        return super.setData(<any>newData);
    }
}
export type FieldDisplayType = 'text' | 'html' | 'url' | 'boolean' | 'date' | 'datetime' | 'time' | 'currency' | 'array';

export enum SortDirection {
    Ascendent,
    Descendent,
}