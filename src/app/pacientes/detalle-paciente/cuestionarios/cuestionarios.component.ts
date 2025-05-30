import { Component, Input, OnInit } from '@angular/core';
import { PatientView } from 'src/app/core/models/pacientes/paciente.model';
import { PacienteService } from '../../paciente.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { SwalService } from 'src/app/core/services/swal.service';

@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrl: './cuestionarios.component.scss'
})
export class CuestionariosComponent  implements OnInit  {

  @Input() pacNElf: PatientView | string;
  idPaciente: string = '';
  paciente: PatientView = new PatientView();
  listaCuestionarios: any[] = [];
  respuestasHistorial: any[] = [];
  preguntasActuales: any[] = [];
  cuestionarioSeleccionado: any;
  envioRespuestas: any[] = [];
  totalesSi: number[] = [];

  showPreguntas = true;
  showResultados = true;

  constructor(
    private pacienteService: PacienteService,
    private authService: AuthService,
    private noti: SwalService
  ) {}

  ngOnInit(): void {
    const data = this.pacienteService.getPacienteSeleccionado();
  
    if (data) {
      this.paciente = data;
      this.idPaciente = this.paciente.idPaciente;
      this.cargarCuestionarios();
    } else {
      // Retry por si el service todavía no lo ha cargado
      setTimeout(() => {
        const retry = this.pacienteService.getPacienteSeleccionado();
        if (retry) {
          this.paciente = retry;
          this.idPaciente = this.paciente.idPaciente;
          this.cargarCuestionarios();
        } else {
          this.noti.error('No se encontró el paciente seleccionado');
        }
      }, 150);
    }
  }

  cargarCuestionarios() {
    this.pacienteService.getCuestionariosPorPaciente(this.paciente.idPaciente)
      .subscribe(resp => {
        this.listaCuestionarios = resp.content || [];
        if (this.listaCuestionarios.length > 0) {
          this.cargarCuestionario(this.listaCuestionarios[0].idCuestionario);
        }
      });
  }

  obtenerPaciente() {
    if (this.pacNElf instanceof PatientView) {
      this.paciente = this.pacNElf;
    } else {
      this.paciente.idPaciente = this.pacNElf;
    }
  }

  cargarCuestionario(idCuestionario: number) {
    this.cuestionarioSeleccionado = idCuestionario;

    this.pacienteService.getRespuestasPorCuestionario(idCuestionario, this.paciente.idPaciente)
      .subscribe(resp => {
        this.respuestasHistorial = resp.map(r => ({
          ...r,
          active: false // <- Cerrado por defecto
        }));

        const nombreCuestionario = this.obtenerNombrePorId(idCuestionario);
        if (nombreCuestionario === 'DETECCION DE DENGUE') {
          this.calcularTotalesSi(resp);
        }
      });

    this.pacienteService.getPreguntasPorCuestionario(idCuestionario)
      .subscribe(resp => {
        this.preguntasActuales = resp;
      });
  }

  obtenerNombrePorId(id: number): string {
    const c = this.listaCuestionarios.find(q => q.idCuestionario === id);
    return c ? c.nombre : '';
  }

  calcularTotalesSi(respuestas: any[]) {
    this.totalesSi = respuestas.map(q => q.json.filter(p => p.Respuesta === 'SI' || p.Respuesta === 'Sí').length);
  }

  guardarCuestionario() {
    const payload = {
      idCuestionario: this.cuestionarioSeleccionado,
      idPaciente: this.paciente.idPaciente,
      creadoPor: this.authService.token?.name, // ajusta según tu servicio
      json: this.preguntasActuales.map(p => ({
        pregunta: p.pregunta,
        respuesta: p.respuesta || ''
      }))
    };

    this.pacienteService.guardarRespuestaCuestionario(payload).subscribe(() => {
      this.noti.success('CUESTIONARIO GUARDADO EXITOSAMENTE');
      this.cargarCuestionario(this.cuestionarioSeleccionado);
    }, () => {
      this.noti.error('OCURRIÓ UN ERROR AL GUARDAR EL CUESTIONARIO');
    });
  }

}
