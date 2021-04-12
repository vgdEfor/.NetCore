import { DtColumnItem } from './dt-column-item';
import { SetData } from 'src/app/shared/models/_basic/set-data';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { DtCheckboxConfig } from './config/dt-checkbox-config';
import { EpDatatableComponent } from '../ep-datatable.component';

class DtSimpleButton extends SetData<DtSimpleButton> {
    /**
     * Do not manipulate this value.
     * Used for Datatable interaction.
     */
    _byDatatable = false;
    text = '';
    url: string = null;
    urlTarget = '_blank';
    iconPreffix: IconPrefix;
    iconName: IconName;
    // iconFont = '';
    // iconImage = '';
    btnClass = 'btn btn-primary';
    disabled = false;
    /** Wether the button should or not be rendered to the datatable */
    rendered = true;
    tooltip = null;
    tooltipPlacement: 'top' | 'left' | 'bottom' | 'right' = 'top';
    // private _btnType: ActDatatableCellButtonType;
    // get btnType() { return this._btnType; }
}
// export class DtActionColumnButton<TColumnRow, TColumnCell> extends DtSimpleButton implements SetData<DtActionColumnButton<TColumnRow, TColumnCell>> {
//     onClick: (ev: MouseEvent, item: any, field: any, fieldDisplay: any, column: DtColumnItem<TColumnRow, TColumnCell>) => void;
//     disabledItemProperty = '';
// }

// export class DtActionButton<TColumnRow> extends DtSimpleButton implements SetData<DtActionButton<TColumnRow>> {
//     onClick: (ev: MouseEvent, items: TColumnRow[], checkboxConfig: DtCheckboxConfig) => void;
// }


export class DtActionColumnButton<TColumnRow, TColumnCell> extends SetData<DtActionColumnButton<TColumnRow, TColumnCell>> {
    /**
     * Do not manipulate this value.
     * Used for Datatable interaction.
     */
    _byDatatable = false;
    text = '';
    url: string = null;
    urlTarget = '_blank';
    iconPreffix: IconPrefix;
    iconName: IconName;
    // iconFont = '';
    // iconImage = '';
    btnClass = 'btn btn-primary';
    disabled = false;
    /** Wether the button should or not be rendered to the datatable */
    rendered = true;
    /** 
     * The name of the boolean property in the row that will determine
     * if the button should appear
     */
    renderedItemProperty = null;
    /**
     * The value that `renderedItemProperty` should match in order to render the button
     * 
     * @todo Currently, only supports string values
     */
    renderedItemPropertyValue: any = true;
    tooltip = null;
    tooltipPlacement: 'top' | 'left' | 'bottom' | 'right' = 'top';
    tooltipAppendTo: 'body' | undefined = undefined;
    // private _btnType: ActDatatableCellButtonType;
    // get btnType() { return this._btnType; }
    onClick: (ev: MouseEvent, datatable: EpDatatableComponent<TColumnRow>, item: TColumnRow, field: any, fieldDisplay: any, column: DtColumnItem<TColumnRow, TColumnCell>) => void;
    disabledItemProperty = '';
}
export class DtActionButton<TColumnRow> extends DtSimpleButton implements SetData<DtActionButton<TColumnRow>> {
    /**
     * Do not manipulate this value.
     * Used for Datatable interaction.
     */
    _byDatatable = false;
    text = '';
    url: string = null;
    urlTarget = '_blank';
    iconPreffix: IconPrefix;
    iconName: IconName;
    // iconFont = '';
    // iconImage = '';
    btnClass = 'btn btn-primary';
    disabled = false;
    /** Wether the button should or not be rendered to the datatable */
    rendered = true;
    tooltip = null;
    tooltipPlacement: 'top' | 'left' | 'bottom' | 'right' = 'top';
    // private _btnType: ActDatatableCellButtonType;
    // get btnType() { return this._btnType; }
    onClick: (ev: MouseEvent, items: TColumnRow[], checkboxConfig: DtCheckboxConfig) => void;
}