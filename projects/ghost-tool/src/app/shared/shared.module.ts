import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import {
  DataTableComponent,
  PopupConfirmComponent,
  PopupDetailComponent,
  UploadImageComponent,
  ViewFilterComponent
} from './common-control';


@NgModule({
  declarations: [
    // shared component
    DataTableComponent,
    PopupConfirmComponent,
    PopupDetailComponent,
    UploadImageComponent,
    ViewFilterComponent,
  ],
  imports: [
    // vendor
    CommonModule,
    RouterModule,
    FormsModule,

    // material
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,
    FormsModule,

    // material
    MatCardModule,
    MatButtonModule,

    // shared component
    DataTableComponent,
    PopupConfirmComponent,
    PopupDetailComponent,
    UploadImageComponent,
    ViewFilterComponent,
  ]
})
export class SharedModule { }
