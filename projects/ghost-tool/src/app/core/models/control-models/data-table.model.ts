import { ControlType, FieldType } from './common-model';

export interface Filter {
    label: string;
    type: ControlType;
    ngModel: string;
    hasExportExcel: boolean;
}
export interface SummaryElement {
    label: string;
    ngModel: string;
}
// support simple header now
export interface Header {
    labels: string[];
    style: string;
}
export interface Field {
    ngModel: string;
    fieldType: FieldType;
    format: string;
}
export interface Record {
    fields: Field[];
    style: string;
}
export interface Paging {
    totalRecord: number;
    pageSizechanged: () => {};
    onPageChanged: () => {};
    itemsPerPageList: number[];
    pageIndex: number;
    pageSize: number;
}
export class DataTable {
    filter: Filter;
    summaryList: SummaryElement[];
    header: Header;
    records: Record[];
    paging: Paging;
    constructor(
        // filter: Filter,
        // summaryList: SummaryElement[],
        // header: Header,
        // records: Record[],
        // paging: Paging
    ) {
        // this.filter = filter;
        // this.summaryList = summaryList;
        // this.header = header;
        // this.records = records;
        // this.paging = paging;
    }
}
