import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from '../core/core.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { FormatosComponent } from './formatos.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate:  [AuthGuard],
    children: [
      { path: '', component: FormatosComponent },
      // { path: ':idConsulta', component: DetalleConsultaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormatosRoutingModule { }
