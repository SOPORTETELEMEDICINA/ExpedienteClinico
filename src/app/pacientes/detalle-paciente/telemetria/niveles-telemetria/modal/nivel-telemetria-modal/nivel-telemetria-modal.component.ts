import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PacienteService } from 'src/app/pacientes/paciente.service';
import { SwalService } from 'src/app/core/services/swal.service';
import { NivelesGlu, NivelesPA, NivelesPeso, NivelesCovid } from 'src/app/core/models/shared/common.model';

@Component({
  selector: 'app-nivel-telemetria-modal',
  templateUrl: './nivel-telemetria-modal.component.html',
  styleUrls: ['./nivel-telemetria-modal.component.scss']
})
export class NivelTelemetriaModalComponent {
  @Input() tipo: string = '';
  @Input() pacienteId: string = '';
  @Output() nivelGuardado = new EventEmitter<void>();

  mostrar = false;
  model: any = {};
  cargando = false;

  periodos = [
    { id: 1, nombre: 'ANTES DEL DESAYUNO' },
    { id: 2, nombre: 'DESPUES DEL DESAYUNO' },
    { id: 3, nombre: 'ANTES DE LA COMIDA' },
    { id: 4, nombre: 'DESPUES DE LA COMIDA' },
    { id: 5, nombre: 'ANTES DE LA CENA' },
    { id: 6, nombre: 'DESPUES DE CENAR' },
    { id: 7, nombre: 'ANTES DE DORMIR' },
    { id: 9, nombre: 'MANUALES' }
  ];

  constructor(
    private pacienteService: PacienteService,
    private notify: SwalService
  ) {}

  abrir(): void {
    this.model = {
      periodo: '',
      medida: null,
      sistolica: null,
      diastolica: null,
      fc: null,
      peso: null,
      temp: null,
      spo: null,
      pulso: null
    };
    this.mostrar = true;
  }

  cerrar(): void {
    this.mostrar = false;
  }

  guardar(): void {
    this.cargando = true;
    const timestamp = Date.now().toString();

    let peticion;

    switch (this.tipo) {
      case 'GLUCOSA': {
        const glu = new NivelesGlu();
        glu.pacidfk = this.pacienteId;
        glu.gluperiodo = +this.model.periodo;
        glu.glufechahora = timestamp;
        glu.glumedida = +this.model.medida;
        peticion = this.pacienteService.guardarNivelesGlucosa(glu);
        break;
      }
      case 'PRESION ARTERIAL': {
        const pa = new NivelesPA();
        pa.pacidfk = this.pacienteId;
        pa.paperiodo = +this.model.periodo;
        pa.pafechahora = timestamp;
        pa.pasysmedida = +this.model.sistolica;
        pa.padiamedida = +this.model.diastolica;
        pa.pafcmedida = +this.model.fc;
        peticion = this.pacienteService.guardarNivelesPA(pa);
        break;
      }
      case 'PESO': {
        const peso = new NivelesPeso();
        peso.pacidfk = this.pacienteId;
        peso.pesoperiodo = +this.model.periodo;
        peso.pesofechahora = timestamp;
        peso.pesomedida = +this.model.peso;
        peticion = this.pacienteService.guardarNivelesPeso(peso);
        break;
      }
      case 'SIGNOS VITALES': {
        const covid = new NivelesCovid();
        covid.pacidfk = this.pacienteId;
        covid.covidperiodo = +this.model.periodo;
        covid.covidfechahora = timestamp;
        covid.covidtempmedida = +this.model.temp;
        covid.covidspomedida = +this.model.spo;
        covid.covidpulsomedida = +this.model.pulso;
        peticion = this.pacienteService.guardarNivelesCovid(covid);
        break;
      }
      default:
        this.notify.warning('Tipo no válido');
        this.cargando = false;
        return;
    }

    peticion.subscribe({
      next: () => {
        this.cargando = false;
        this.mostrar = false;
        this.notify.success('Nivel registrado exitosamente');
        this.nivelGuardado.emit();
      },
      error: () => {
        this.cargando = false;
        this.notify.error('Error al registrar el nivel');
      }
    });
  }
}
