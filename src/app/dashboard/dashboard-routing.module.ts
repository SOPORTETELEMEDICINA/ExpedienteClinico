// dashboard-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from '../core/core.component'; // 👈 importante
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
