import { NgModule } from '@angular/core';

import { ApiToExcelRoutingModule } from './api-to-excel-routing.module';
import { ApiToExcelComponent } from './api-to-excel.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ApiToExcelComponent],
  imports: [
    SharedModule,
    ApiToExcelRoutingModule
  ]
})
export class ApiToExcelModule { }
