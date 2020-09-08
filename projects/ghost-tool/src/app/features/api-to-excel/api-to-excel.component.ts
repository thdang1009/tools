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

  getHeaders(arr: any[]): any[] {
    const jsonWithoutSpace = JSON.stringify(arr);
    const regExKey = /\"[a-z0-9\_]+\"\:/gi;
    const matches = jsonWithoutSpace.match(regExKey) || [];
    const formated = matches.map(el => el.replace(/\"|\:/g, ''));
    return Array.from(new Set(formated)) || [];
  }

  prepareToExport() {
    const object = JSON.parse(this.inputJson);
    const funcs = {
      isNotArray: (obj: any) => Object.keys(obj).reduce((res, key) => {
        const isArray = Array.isArray(obj[key]);
        const headers = isArray && this.getHeaders(obj[key]) || [];
        const formatedData = isArray && [headers, ...obj[key].map((item: object) => headers.map((header: keyof typeof item) => item[header] || '')) || []];
        return isArray && [...res, formatedData] || res;
      }, []),
      isArray: (obj: any) => {
        const headers = this.getHeaders(obj) || [];
        return [[headers, ...obj.map((item: object) => headers.map((header: keyof typeof item) => item[header] || ''))]]
      }
    };
    const listArr = funcs[Array.isArray(object) && 'isArray' || 'isNotArray'](object);
    return { isValid: listArr.length !== 0, listArr };
  }

  jsonToExcel(): boolean {
    this.setLoading(true);
    const { isValid, listArr } = this.prepareToExport();
    const wb = XLSX.utils.book_new();
    const length = listArr.length;
    isValid && listArr.forEach((dataArray: any[], index) => {
      const ws = XLSX.utils.json_to_sheet(dataArray, {
        skipHeader: true
      });
      XLSX.utils.book_append_sheet(wb, ws, '' + index);
      // tslint:disable-next-line: no-unused-expression
      index === length - 1 && this.setLoading(false) && XLSX.writeFile(wb, 'download.xlsx');
    });
    return true;
  }

  setLoading(val: boolean) {
    this.isRunning = val;
    return true;
  }
}
