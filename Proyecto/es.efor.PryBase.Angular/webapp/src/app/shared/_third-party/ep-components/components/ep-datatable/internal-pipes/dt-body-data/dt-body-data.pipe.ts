import { Pipe, PipeTransform } from '@angular/core';
import { DtColumnItem } from '../../models/dt-column-item';

@Pipe({
  name: 'dtBodyData'
})
export class DtBodyDataPipe implements PipeTransform {

  /**
   * 
   * @param rowItem The data that is being represented at the current row
   * @param column The column where the data is being represented at
   * @param displayType
   * `data`: the cell's body data is being displayed.
   * `icon`: The icon needs to be retrieved.
   * `icon-class`: The class that is being applied to the cell's icon needs to be retrieved.
   */
  transform(rowItem: unknown, args: DtBodyDataPipeArgs) {
    if (args == null) args = new DtBodyDataPipeArgs();
    if (args.displayType == null) args.displayType = 'data';
    if (args.column == null) throw Error('Column must be defined');

    const data = this.getDataItem(rowItem, args.column.field, args.column, false);
    const iconForValue = (args.column.valueIcons || []).find(i => i.value === data);

    if (args.displayType === 'data') {
      if (iconForValue && iconForValue.iconOnly) return '';
      else if (data == null) return '';
      else return data;
    } else if (args.displayType === 'icon') {
      if (iconForValue) return [iconForValue.iconPreffix, iconForValue.iconName];
      return null;
    } else {
      if (iconForValue) return iconForValue.iconCssClass;
    }
  }

  getDataItem(rowItem: any, name: string, column?: DtColumnItem, isExportingToExcel = false) {
    if (rowItem == null) { return ''; }
    // if (rowItem[name] != null) {
      let middleware: (displayedData: any, column: DtColumnItem, rowData: any) => string = null;
      if (isExportingToExcel) middleware = column.fieldExcelExportMiddleware;
      else middleware = column.fieldDisplayMiddleware;

    if (middleware == null) throw Error('Middleware has yet to be defined');

    if (!column.fieldDisplay && !column.field) return null;
    const data = this.extractData(rowItem, column.fieldDisplay || column.field);
    if (data == null) return data;

    const displayData = middleware(data, column, rowItem);
    return displayData;
    // }
  }
  private extractData(rowItem: any, propertyName: string) {
    const nestSeparatorIndex = propertyName.indexOf('.');
    if (nestSeparatorIndex > 0) {
      const firstLevelProperty = propertyName.substring(0, nestSeparatorIndex);
      const nestedProperty = propertyName.substr(nestSeparatorIndex + 1);

      const nestedValue = rowItem[firstLevelProperty];
      if (nestedValue != null && typeof (nestedValue) === 'object') return this.extractData(nestedValue, nestedProperty);
      return nestedValue;
    }
    return rowItem[propertyName];
  }
}

export class DtBodyDataPipeArgs {
  column: DtColumnItem;
  displayType: 'data' | 'icon' | 'icon-class';
}
