import { NgModule } from '@angular/core';

import { LifeCircleDrawerRoutingModule } from './life-circle-drawer-routing.module';
import { LifeCircleDrawerComponent } from './life-circle-drawer.component';
import { SharedModule } from '../../shared/shared.module';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
  declarations: [LifeCircleDrawerComponent],
  imports: [
    SharedModule,
    LifeCircleDrawerRoutingModule,
    ColorPickerModule
  ]
})
export class LifeCircleDrawerModule { }
