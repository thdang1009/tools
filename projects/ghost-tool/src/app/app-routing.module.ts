import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'api-to-excel',
    loadChildren: () => import('./features/api-to-excel/api-to-excel.module').then(m => m.ApiToExcelModule)
  },
  {
    path: 'life-circle-drawer',
    loadChildren: () => import('./features/life-circle-drawer/life-circle-drawer.module').then(m => m.LifeCircleDrawerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
