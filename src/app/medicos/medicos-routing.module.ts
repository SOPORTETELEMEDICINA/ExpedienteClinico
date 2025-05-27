import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMedicosComponent } from './componentes/lista-medicos/lista-medicos.component';
import {AgregarMedicoComponent} from './componentes/agregar-medico/agregar-medico.component';
import { CoreComponent } from '../core/core.component';


const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: '', redirectTo: 'lista', pathMatch: 'full' },
      { path: 'lista', component: ListaMedicosComponent },
      { path: 'agregar', component: AgregarMedicoComponent },
      { path: 'editar/:id', component: AgregarMedicoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule {}
