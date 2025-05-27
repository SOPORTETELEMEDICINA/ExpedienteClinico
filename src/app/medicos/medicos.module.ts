import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosRoutingModule } from './medicos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaMedicosComponent } from './componentes/lista-medicos/lista-medicos.component';
import { AgregarMedicoComponent } from './componentes/agregar-medico/agregar-medico.component';

@NgModule({
  declarations: [
    AgregarMedicoComponent,
    ListaMedicosComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MedicosModule { }

