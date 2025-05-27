import { Component, OnInit, Input,ViewChild  } from '@angular/core';
import { PatientView } from 'src/app/core/models/pacientes/paciente.model';
import { NivelesCovid, NivelesGlu, NivelesPA, NivelesPeso } from 'src/app/core/models/shared/common.model';
import { PacienteService } from 'src/app/pacientes/paciente.service';
import { NotificationService } from 'src/app/shared/utils/notification.service';
import { NivelTelemetriaModalComponent } from './modal/nivel-telemetria-modal/nivel-telemetria-modal.component';

@Component({
  selector: 'app-niveles-telemetria',
  templateUrl: './niveles-telemetria.component.html',
  styleUrls: ['./niveles-telemetria.component.scss']
})
export class NivelesTelemetriaComponent implements OnInit {
  @Input() pacienteId: string = '';
  @ViewChild('modalRef') modalRef!: NivelTelemetriaModalComponent;
  paciente = new PatientView();
  selectedModeData: 'lista' | 'grafica' | 'ambos' = 'lista';
  selectedTypeGraph: 'line' | 'bar' = 'line';
  tipo = 'GLUCOSA';
  periodo = '0';
  fecha1: string | null = null;
  fecha2: string | null = null;

  titleP = '';
  titleG = '';
  titlesC: string[] = [];
  titlesP: string[] = [];

  niveles = {
    glucosa: [] as NivelesGlu[],
    pa: [] as NivelesPA[],
    peso: [] as NivelesPeso[],
    covid: [] as NivelesCovid[]
  };

  parametros = {
    glucosa: { urgenciabaja: 60, alertaalta: 140, urgenciaalta: 200 },
    pa: { bajasys: 90, bajadia: 60, altasys: 140, altadia: 90 },
    pesoInicial: 0
  };

  periodos = [
    { id: 1, nombre: 'ANTES DEL DESAYUNO' },
    { id: 2, nombre: 'DESPUES DEL DESAYUNO' },
    { id: 3, nombre: 'ANTES DE LA COMIDA' },
    { id: 4, nombre: 'DESPUES DE LA COMIDA' },
    { id: 5, nombre: 'ANTES DE LA CENA' },
    { id: 6, nombre: 'DESPUES DE CENAR' },
    { id: 7, nombre: 'ANTES DE DORMIR' },
    { id: 9, nombre: 'MANUALES' },
    { id: 0, nombre: 'OTRO' }
  ];

  constructor(
    private pacienteService: PacienteService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.obtenerPaciente();
    this.obtenerNivelesIniciales();
    this.obtenerIndicadores();
  }

  obtenerPaciente(): void {
    this.pacienteService.getPacienteById(this.pacienteId).subscribe(p => this.paciente = p);
  }

  abrirModalNuevoNivel(): void {
    if (this.modalRef) {
      this.modalRef.abrir();
    }
  }

  obtenerNivelesIniciales(): void {
    this.pacienteService.getNivelesGlucosa(this.pacienteId).subscribe((r: any) => {
      this.niveles.glucosa = Array.isArray(r) ? r : r.content;
    });
    this.pacienteService.getNivelesPA(this.pacienteId).subscribe((r: any) => {
      this.niveles.pa = Array.isArray(r) ? r : r.content;
    });
    this.pacienteService.getNivelesPeso(this.pacienteId).subscribe((r: any) => {
      this.niveles.peso = Array.isArray(r) ? r : r.content;
    });
    this.pacienteService.getNivelesCovid(this.pacienteId).subscribe((r: any) => {
      this.niveles.covid = Array.isArray(r) ? r : r.content;
    });
  }

  tieneDatos(): boolean {
    switch (this.tipo) {
      case 'GLUCOSA':
        return this.niveles.glucosa.length > 0;
      case 'PRESION ARTERIAL':
        return this.niveles.pa.length > 0;
      case 'PESO':
        return this.niveles.peso.length > 0;
      case 'SIGNOS VITALES':
        return this.niveles.covid.length > 0;
      default:
        return false;
    }
  }

  
  obtenerIndicadores(): void {
    this.pacienteService.getIndicacionesGlucosa(this.pacienteId).subscribe(i => {
      this.parametros.glucosa = {
        urgenciabaja: i.urgenciabaja,
        alertaalta: i.alertaalta,
        urgenciaalta: i.urgenciaalta
      };
    });
    this.pacienteService.getIndicacionesPA(this.pacienteId).subscribe(i => {
      this.parametros.pa = {
        bajasys: i.alertabajasys,
        bajadia: i.alertabajadia,
        altasys: i.urgenciaaltasys,
        altadia: i.urgenciaaltadia
      };
    });
    this.pacienteService.getIndicacionesPeso(this.pacienteId).subscribe(i => {
      this.parametros.pesoInicial = i.pesoinicial;
    });
  }

  filtrarNiveles(): void {
    const periodo = this.periodo || '0';
    const inicio = this.fecha1 ?? '';
    const fin = this.fecha2 ?? '';
  
    switch (this.tipo) {
      case 'GLUCOSA':
        this.pacienteService.getNivelesGlucosaFechas(this.pacienteId, periodo, inicio, fin).subscribe((res: any) => {
          this.niveles.glucosa = Array.isArray(res) ? res : res.content;
        });
        break;
  
      case 'PRESION ARTERIAL':
        this.pacienteService.getNivelesPAFechas(this.pacienteId, periodo, inicio, fin).subscribe((res: any) => {
          this.niveles.pa = Array.isArray(res) ? res : res.content;
        });
        break;
  
      case 'PESO':
        this.pacienteService.getNivelesPesoFechas(this.pacienteId, periodo, inicio, fin).subscribe((res: any) => {
          this.niveles.peso = Array.isArray(res) ? res : res.content;
        });
        break;
  
      case 'SIGNOS VITALES':
        this.pacienteService.getNivelesCovidFechas(this.pacienteId, periodo, inicio, fin).subscribe((res: any) => {
          this.niveles.covid = Array.isArray(res) ? res : res.content;
        });
        break;
    }
  }
  

  getFechaFormateada(timestamp: number | string): string {
    const date = new Date(Number(timestamp));
    return date.toLocaleString('es-MX', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }

  getColorEstadoGlucosa(valor: number): string {
    if (valor <= this.parametros.glucosa.urgenciabaja) return 'bg-danger-subtle';
    if (valor <= this.parametros.glucosa.alertaalta) return '';
    if (valor <= this.parametros.glucosa.urgenciaalta) return 'bg-warning-subtle';
    return 'bg-danger-subtle';
  }

  getColorEstadoPA(sys: number, dia: number): string {
    if (sys <= this.parametros.pa.bajasys || dia <= this.parametros.pa.bajadia) return 'bg-danger-subtle';
    if (sys > this.parametros.pa.altasys || dia > this.parametros.pa.altadia) return 'bg-warning-subtle';
    return '';
  }

  getColorEstadoPeso(peso: number): string {
    if (peso <= this.parametros.pesoInicial * 0.9) return 'bg-danger-subtle';
    if (peso >= this.parametros.pesoInicial * 1.1) return 'bg-warning-subtle';
    return '';
  }

  getColorEstadoCovid(temp: number, spo: number, pulso: number): string {
    if (temp >= 39 || spo < 90 || pulso >= 120) return 'bg-danger-subtle';
    if ((temp >= 38 && temp < 39) || (spo >= 90 && spo <= 92) || (pulso >= 100 && pulso < 120)) return 'bg-warning-subtle';
    return '';
  }

  obtenerNombrePeriodo(id: number): string {
    const encontrado = this.periodos.find(p => p.id === id);
    return encontrado ? encontrado.nombre : 'OTRO';
  }

  graficar(): void {
    this.filtrarNiveles();
  }
}
