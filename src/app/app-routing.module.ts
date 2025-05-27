import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Redirección inicial
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },

  // Módulo de autenticación (login, register, etc.)
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },

  // Módulo Core (dashboard, home, etc.)
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },

  // Rutas principales por tipo de usuario
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { path: 'medicos', loadChildren: () => import('./medicos/medicos.module').then(m => m.MedicosModule) },
  { path: 'pacientes', loadChildren: () => import('./pacientes/paciente.module').then(m => m.PacienteModule) },
  { path: 'consultas', loadChildren: () => import('./consulta/consultas.module').then(m => m.ConsultasModule) },


  // Página de error
  {
    path: 'error',
    loadChildren: () =>
      import('./error/error.module').then((m) => m.ErrorModule),
  },
  

  // Ruta comodín para 404
  {
    path: '**',
    redirectTo: 'error/error404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
