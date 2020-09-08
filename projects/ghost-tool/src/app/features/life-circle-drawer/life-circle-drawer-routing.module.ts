import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifeCircleDrawerComponent } from './life-circle-drawer.component';

const routes: Routes = [{ path: '', component: LifeCircleDrawerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCircleDrawerRoutingModule { }
