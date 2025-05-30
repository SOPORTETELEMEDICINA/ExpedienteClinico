import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { CoreComponent } from '../core/core.component';
import { PacienteDetalleComponent } from './detalle-paciente/paciente-detalle.component';
import { PerfilComponent } from './detalle-paciente/perfil/perfil.component';
import { CursoClinicoComponent } from './detalle-paciente/curso-clinico/curso-clinico.component';
import { ConsultaActualComponent } from './detalle-paciente/consulta-actual/consulta-actual.component';
import { TelemetriaComponent } from './detalle-paciente/telemetria/telemetria.component';
import { CuestionariosComponent } from './detalle-paciente/cuestionarios/cuestionarios.component';
import { DetalleConsultaComponent } from '../consulta/detalle-consulta/detalle-consulta.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { HistoriaClinicaComponent } from './detalle-paciente/historia-clinica/historia-clinica.component';
import { ListaPacientesNoAtendidosComponent } from './lista-pacientes-no-atendidos/lista-pacientes-no-atendidos.component';
import { ListaPacientesCompartidosComponent } from './lista-pacientes-compartidos/lista-pacientes-compartidos.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'lista', pathMatch: 'full' },
      { path: 'lista', component: ListaPacientesComponent },
      { path: 'lista-no-atendidos', component: ListaPacientesNoAtendidosComponent },
      { path: 'lista-compartidos', component: ListaPacientesCompartidosComponent },
      { path: 'agregar', component: CrearPacienteComponent },
      { path: 'editar/:id', component: CrearPacienteComponent },
      {
        path: 'detalle/:idPaciente',
        component: PacienteDetalleComponent,
        children: [
          //{ path: 'perfil', loadComponent: () => import('./detalle-paciente/perfil/perfil.component').then(m => m.PerfilComponent) },
          //{ path: 'curso-clinico', loadComponent: () => import('./detalle-paciente/curso-clinico/curso-clinico.component').then(m => m.CursoClinicoComponent) },
          //{ path: 'consulta-actual', loadComponent: () => import('./detalle-paciente/consulta-actual/consulta-actual.component').then(m => m.ConsultaActualComponent) },
          //{ path: 'telemetria', loadComponent: () => import('./detalle-paciente/telemetria/telemetria.component').then(m => m.TelemetriaComponent) },
          //{ path: 'cuestionarios', loadComponent: () => import('./detalle-paciente/cuestionarios/cuestionarios.component').then(m => m.CuestionariosComponent) },
    
          {path: 'perfil',component: PerfilComponent},
          {path: 'historia-clinica',component: HistoriaClinicaComponent},
          {path: 'curso-clinico',component: CursoClinicoComponent},
          {path: 'consulta-actual',component: DetalleConsultaComponent },
          {path: 'telemetria',component: TelemetriaComponent},
          {path: 'cuestionarios',component: CuestionariosComponent},
    
          { path: '', redirectTo: 'perfil', pathMatch: 'full' }
        ]
      }
    ]
  },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
