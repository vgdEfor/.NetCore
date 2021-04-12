import { SetData } from 'src/app/shared/models/_basic/set-data';
import { LabelAndValue } from '../../../utils/models/label-and-value';

export class FilterItem extends SetData<FilterItem> {
    field: string;
    value: any;

    op: FilterOpType = FilterOpType.Cn;
    format: FilterFormatType = FilterFormatType.String;

    options: LabelAndValue[] = [];
}
export class DtFilterItem extends FilterItem implements SetData<DtFilterItem> {
    type: EpDatatableFilterType = EpDatatableFilterType.text;
}

export enum EpDatatableFilterType {
    text = 0,
    textarea = 1,
    date = 2,
    number = 3,
    combo = 4,
    autocomplete = 5 // v2
}
export enum FilterOpType {
    /// Equal
    Eq = 1,
    /// Not equal
    Ne = 2,
    /// Combines equal and not equal
    // tslint:disable-next-line:no-bitwise
    EqualOrNotEqual = FilterOpType.Eq | FilterOpType.Ne,
    /// Less
    Lt = 4,
    /// Less or equal
    Le = 8,
    /// Greater
    Gt = 16,
    /// Greater or equal
    Ge = 32,
    /// Begins with
    Bw = 64,
    /// Does not begin with
    Bn = 128,
    /// Is in
    In = 256,
    /// Is not in
    Ni = 512,
    /// Ends with
    Ew = 1024,
    /// Does not end with
    En = 2048,
    /// Contains
    Cn = 4096,
    /// Does not contain
    Nc = 8192,
    /// Is null
    Nu = 16384,
    /// Is not null
    Nn = 32768,
    /// Combines equal, not equal, less, less or equal, greater, greater or equal, is null, is not null.
    // tslint:disable-next-line:max-line-length no-bitwise
    NoTextOperators = FilterOpType.Eq | FilterOpType.Ne | FilterOpType.Lt | FilterOpType.Le | FilterOpType.Gt | FilterOpType.Ge | FilterOpType.Nu | FilterOpType.Nn,
    /**
     * Combines equal, not equal, begins with, does not begin with, ends with, does not end with,
     * contains and does not contain, is null, is not null
     */
    // tslint:disable-next-line:max-line-length no-bitwise
    TextOperators = FilterOpType.Eq | FilterOpType.Ne | FilterOpType.Bw | FilterOpType.Bn | FilterOpType.Ew | FilterOpType.En | FilterOpType.Cn | FilterOpType.Nc | FilterOpType.Nu | FilterOpType.Nn,
    /// Combines is null, is not null
    // tslint:disable-next-line:max-line-length no-bitwise
    NullOperators = FilterOpType.Nu | FilterOpType.Nn
}
export enum FilterFormatType {
    Literal = 0,
    String = 1,
    DateTime = 2,
    Guid = 3,
    Date = 2, // !! NO ESTÁ EN ACTIOBP.LINQ
    Bool = 'bool', // !! NO ESTÁ EN ACTIOBP.LINQ
    Int = 'literal', // !! NO ESTÁ EN ACTIOBP.LINQ
}