import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {

  // table
  headNames = [];
  value = [];
  action = [];

  // view filter
  listFilter = [];

  constructor() { }

}
