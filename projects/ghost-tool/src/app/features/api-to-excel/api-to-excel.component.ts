import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-api-to-excel',
  templateUrl: './api-to-excel.component.html',
  styleUrls: ['./api-to-excel.component.scss']
})
export class ApiToExcelComponent implements OnInit {

  constructor() {
    //
  }

  // flag
  isRunning = false;
  // object
  inputJson = ``;

  ngOnInit(): void {
    //
  }

  prepareToExport() {
    const object = JSON.parse(this.inputJson);
    const funcs = {
      isNotArray: Object.keys(object).reduce((res, key) => {
        const isArray = Array.isArray(object[key]); // pick and format it
        // formatedData là một mảng gồm phần tử đầu tiên là mảng header
        // các mảng còn lại chứ pure data ko có key
        const formatedData = isArray && [Object.keys(object[key][0]), ...object[key].map((subObject: object) => Object.values(subObject)) || []];
        return isArray && [...res, formatedData] || res;
      }, []),
      isArray: [[Object.keys(object[0]), ...object.map((subObject: object) => Object.values(subObject)) || []]]
    };
    const listArr = funcs[Array.isArray(object) && 'isArray' || 'isNotArray'];
    return { isValid: listArr.length !== 0, listArr };
  }

  jsonToExcel(): boolean {
    this.setLoading(true);
    const { isValid, listArr } = this.prepareToExport();
    const wb = XLSX.utils.book_new();
    const callThirdPartyFunc = (list: any[][]) => {
      const length = list.length;
      list.forEach((wsData, index) => {
        const ws = XLSX.utils.aoa_to_sheet(wsData);
        XLSX.utils.book_append_sheet(wb, ws, '' + index);
        // tslint:disable-next-line: no-unused-expression
        index === length - 1 && this.setLoading(false) && XLSX.writeFile(wb, 'download.xlsx');
      });
      return true;
    };
    return isValid && callThirdPartyFunc(listArr as any[][]);
  }

  setLoading(val: boolean) {
    this.isRunning = val;
    return true;
  }
}
