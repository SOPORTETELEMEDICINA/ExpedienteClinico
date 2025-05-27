// dashboard-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { CoreComponent } from '../core/core.component'; // 👈 importante

const routes: Routes = [
  {
    path: 'dashboard',
    component: CoreComponent,
    children: [
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      { path: 'doctor-dashboard', component: DoctorDashboardComponent },
      { path: 'patient-dashboard', component: PatientDashboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
