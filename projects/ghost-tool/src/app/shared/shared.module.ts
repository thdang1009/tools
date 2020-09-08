import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    // vendor
    CommonModule,
    RouterModule,
    FormsModule,

    // material
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,
    FormsModule,

    // material
    MatCardModule,
    MatButtonModule
  ]
})
export class SharedModule { }
