import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PacienteRoutingModule } from './paciente-routing.module';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { PacienteDetalleComponent } from './detalle-paciente/paciente-detalle.component';

import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './detalle-paciente/perfil/perfil.component';
import { CursoClinicoComponent } from './detalle-paciente/curso-clinico/curso-clinico.component'; // ajusta el path según tu estructura
import { ConsultaActualComponent } from './detalle-paciente/consulta-actual/consulta-actual.component'
import { TelemetriaComponent } from './detalle-paciente/telemetria/telemetria.component'
import { CuestionariosComponent } from './detalle-paciente/cuestionarios/cuestionarios.component'
import { HojaSeguimientoComponent } from './detalle-paciente/telemetria/hoja-seguimiento/hoja-seguimiento.component';
import { NivelesTelemetriaComponent } from './detalle-paciente/telemetria/niveles-telemetria/niveles-telemetria.component';
import { LinealComponent } from './detalle-paciente/telemetria/niveles-telemetria/charts/lineal/lineal.component';
import { BarrasComponent } from './detalle-paciente/telemetria/niveles-telemetria/charts/barras/barras.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NivelTelemetriaModalComponent } from './detalle-paciente/telemetria/niveles-telemetria/modal/nivel-telemetria-modal/nivel-telemetria-modal.component';


@NgModule({
  declarations: [ ListaPacientesComponent,CrearPacienteComponent,PacienteDetalleComponent
    ,PerfilComponent
    ,CursoClinicoComponent
    //,ConsultaActualComponent
    ,TelemetriaComponent
    ,LinealComponent
    ,BarrasComponent
    ,HojaSeguimientoComponent
    ,NivelesTelemetriaComponent
    ,NivelTelemetriaModalComponent
    //,CuestionariosComponent

  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,ReactiveFormsModule,FormsModule,NgApexchartsModule 
  ]
})
export class PacienteModule { }
 