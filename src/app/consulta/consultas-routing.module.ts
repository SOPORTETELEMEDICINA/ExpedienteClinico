import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from '../core/core.component';
import { ListaConsultasComponent } from './lista-consultas/lista-consultas.component';
import { DetalleConsultaComponent } from './detalle-consulta/detalle-consulta.component';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ListaConsultasComponent },
      { path: ':idConsulta', component: DetalleConsultaComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
