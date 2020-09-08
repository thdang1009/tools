import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiToExcelComponent } from './api-to-excel.component';

const routes: Routes = [{ path: '', component: ApiToExcelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiToExcelRoutingModule { }
