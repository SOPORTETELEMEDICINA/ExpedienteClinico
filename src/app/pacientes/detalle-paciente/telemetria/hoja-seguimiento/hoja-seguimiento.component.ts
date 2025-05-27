import { Component, Input, OnInit } from '@angular/core';
import { PacienteService } from '../../../paciente.service';
import { IndicacioesPA, IndicacionesGlu, IndicacionesPeso, InicacionesCovid } from 'src/app/core/models/shared/common.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hoja-seguimiento',
  templateUrl: './hoja-seguimiento.component.html',
  styleUrls: ['./hoja-seguimiento.component.scss']
})
export class HojaSeguimientoComponent implements OnInit {
  @Input() pacienteId: string = '';
  cargando = false;

  tipos = ['glucosa', 'presion arterial', 'peso', 'signos vitales'];
  tipoSeleccionado: string = 'glucosa';
  tipoAbreviado: string = 'glu';
  periodos: number[] = [];
  dias: string[] = ['lu', 'ma', 'mi', 'ju', 'vi', 'sa', 'do'];
  labels: string[] = [];
  paciente2: any; // o crea una clase/modelo si lo prefieres
  indicacion: any = new IndicacionesGlu();

  camposRangos: any = {
    glucosa: [
      { label: 'URGENCIA BAJA:', key: 'urgenciabaja' },
      { label: 'ALERTA ALTA:', key: 'alertaalta' },
      { label: 'URGENCIA ALTA:', key: 'urgenciaalta' }
    ],
    'presion arterial': [
      { label: 'ALERTA BAJA (SYS):', key: 'alertabajasys' },
      { label: 'ALERTA BAJA (DIA):', key: 'alertabajadia' },
      { label: 'URGENCIA ALTA (SYS):', key: 'urgenciaaltasys' },
      { label: 'URGENCIA ALTA (DIA):', key: 'urgenciaaltadia' }
    ],
    peso: [
      { label: 'PESO INICIAL:', key: 'pesoinicial' },
      { label: 'TALLA INICIAL:', key: 'tallainicial' }
    ],
    'signos vitales': []
  };

  indicacionesCargadas: { [key: string]: boolean } = {
    glucosa: false,
    'presion arterial': false,
    peso: false,
    'signos vitales': false
  };
  diahoy: string = new Date().toISOString().substring(0, 10); // Formato YYYY-MM-DD
  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.pacienteService.getPacienteById(this.pacienteId).subscribe((resp: any) => {
      this.paciente2 = resp;
    });

    this.seleccionarTipo(this.tipoSeleccionado);
  }

  seleccionarTipo(tipo: string) {
    this.tipoSeleccionado = tipo;
    this.tipoAbreviado = this.obtenerPrefijo(tipo);
    this.periodos = this.obtenerNumeroPeriodos(tipo);
    this.labels = this.obtenerLabels(tipo);
    this.indicacion = this.instanciarClase();
    this.cargarIndicaciones();
  }

  obtenerPrefijo(tipo: string): string {
    switch (tipo) {
      case 'glucosa': return 'glu';
      case 'presion arterial': return 'sys';
      case 'peso': return 'nutri';
      case 'signos vitales': return 'covid';
      default: return 'gen';
    }
  }

  obtenerNumeroPeriodos(tipo: string): number[] {
    switch (tipo) {
      case 'glucosa': return Array.from({ length: 8 }, (_, i) => i + 1);
      case 'presion arterial': return Array.from({ length: 7 }, (_, i) => i + 1);
      case 'peso': return Array.from({ length: 3 }, (_, i) => i + 1);
      case 'signos vitales': return Array.from({ length: 4 }, (_, i) => i + 1);
      default: return [];
    }
  }

  obtenerLabels(tipo: string): string[] {
    switch (tipo.toUpperCase()) {
      case 'PRESION ARTERIAL':
        return ['ANTES DEL DESAYUNO:', 'DESPUES DEL DESAYUNO:', 'ANTES DE LA COMIDA:', 'DESPUES DE LA COMIDA:', 'ANTES DE CENAR:', 'DESPUES DE LA CENA:', 'ANTES DE DORMIR:'];
      case 'PESO':
        return ['MAÑANA:', 'TARDE:', 'NOCHE:'];
      case 'SIGNOS VITALES':
        return ['MAÑANA:', 'TARDE:', 'NOCHE:', 'OTRO:'];
      case 'GLUCOSA':
      default:
        return ['ANTES DEL DESAYUNO:', 'DESPUES DEL DESAYUNO:', 'ANTES DE LA COMIDA:', 'DESPUES DE LA COMIDA:', 'ANTES DE LA CENA:', 'DESPUES DE LA CENA:', 'ANTES DE DORMIR:', 'A LAS 3:00 A.M.'];
    }
  }

  cargarIndicaciones() {
    if (!this.pacienteId) return;

    this.cargando = true;
    const servicio: any = this.obtenerServicio(this.tipoSeleccionado);
    const get$ = servicio?.get?.(this.pacienteId);

    if (get$ && typeof get$.subscribe === 'function') {
      get$.subscribe({
        next: (resp: any) => {
          this.cargando = false;
         // this.indicacion = resp;
         this.indicacion = resp || this.instanciarClase();
          this.indicacionesCargadas[this.tipoSeleccionado] = true;

          this.periodos.forEach(i => {
            const horaKey = this.tipoAbreviado + i + 'hora';
            const tieneDiasActivos = this.dias.some(d => this.indicacion[this.tipoAbreviado + i + d]);
          
            if (this.tipoSeleccionado === 'glucosa' && i === 8) {
              this.indicacion[horaKey] = '03:00:00';
              return;
            }
          
            if (!this.indicacion[horaKey] || this.indicacion[horaKey] === '00:00:00') {
              const horaRespKey = 'p' + i + 'hora';
              if (resp && resp[horaRespKey]) {
                this.indicacion[horaKey] = resp[horaRespKey];
              } else {
                this.indicacion[horaKey] = tieneDiasActivos ? '08:00:00' : '00:00:00';
              }
            }
          });
        },
        error: () => {
          this.cargando = false;
          this.indicacionesCargadas[this.tipoSeleccionado] = false;
          this.indicacion = this.instanciarClase();
          if (this.tipoSeleccionado === 'glucosa') {
            this.indicacion.glu8hora = '03:00:00';
          }
        }
      });
    } else {
      this.cargando = false;
    }
  }

  guardar() {
    const payload = {
      ...this.indicacion,
      pacidfk: this.pacienteId
    };
  
    const servicio: any = this.obtenerServicio(this.tipoSeleccionado);
    const esPut = this.indicacionesCargadas[this.tipoSeleccionado];
    const tipo = this.obtenerTipoNotificacion();
  
    this.cargando = true;
  
    this.pacienteService.getNotipac(this.paciente2.idUsuario, this.paciente2.idDevice, tipo).subscribe((notis: any[]) => {
      // Cancelar notificaciones activas
      notis.forEach(noti => {
        this.pacienteService.dellNotipac(this.paciente2.idUsuario, this.paciente2.idDevice, tipo).subscribe();
        this.pacienteService.postCANCELNotification(noti.idNotification).subscribe();
      });
  
      // Crear nuevas notificaciones por periodo
      this.periodos.forEach(i => {
        const horaKey = this.tipoAbreviado + i + 'hora';
        const hora = this.indicacion[horaKey];
        const diasActivos = this.dias.some(d => this.indicacion[this.tipoAbreviado + i + d]);
  
        if (hora && hora !== '00:00:00' && diasActivos) {
          const horaNoti = hora.substring(0, 5);
  
          const nuevaNoti = {
            app_id: environment.OSAPPID,
            data: { ID: tipo, PERD: i },
            include_player_ids: [this.paciente2.idDevice],
            template_id: this.obtenerTemplatePorTipo(tipo),
            send_after: `${this.diahoy} ${horaNoti}:00 GMT-6`
          };
  
          this.pacienteService.postNotification(nuevaNoti).subscribe((res: any) => {
            const reg = {
              idUser: this.paciente2.idUsuario, 
              idDevice: this.paciente2.idDevice,
              idNotification: res.id,
              tipoNotificacion: tipo
            };
            this.pacienteService.postNotiPacientes(reg).subscribe();
          });
        }
      });
  
      // Guardar indicaciones
      const peticion$ = esPut
        ? servicio.put(this.pacienteId, payload)
        : servicio.post(payload);
  
      if (peticion$ && typeof peticion$.subscribe === 'function') {
        peticion$.subscribe({
          next: () => {
            this.cargando = false;
            this.indicacionesCargadas[this.tipoSeleccionado] = true;
          },
          error: () => {
            this.cargando = false;
          }
        });
      } else {
        this.cargando = false;
      }
    });
  }
  
  obtenerTipoNotificacion(): number {
    switch (this.tipoSeleccionado) {
      case 'glucosa': return 1;
      case 'presion arterial': return 2;
      case 'peso': return 3;
      case 'signos vitales': return 4;
      default: return 1;
    }
  }

  obtenerTemplatePorTipo(tipo: number): string {
    switch (tipo) {
      case 1: return environment.OSTEMPLATEGL;
      case 2: return environment.OSTEMPLATEPA;
      case 3: return environment.OSTEMPLATEPE;
      case 4: return environment.OSTEMPLATECO;
      default: return environment.OSTEMPLATEGL;
    }
  }
  

  obtenerServicio(tipo: string) {
    return {
      glucosa: {
        get: (id: string) => this.pacienteService.getIndicacionesGlucosa(id),
        post: (data: any) => this.pacienteService.postIndicacionesGlucosa(data),
        put: (id: string, data: any) => this.pacienteService.putIndicacionesGlucosa(id, data)
      },
      'presion arterial': {
        get: (id: string) => this.pacienteService.getIndicacionesPA(id),
        post: (data: any) => this.pacienteService.postIndicacionesPA(data),
        put: (id: string, data: any) => this.pacienteService.putIndicacionesPA(id, data)
      },
      peso: {
        get: (id: string) => this.pacienteService.getIndicacionesPeso(id),
        post: (data: any) => this.pacienteService.postIndicacionesPeso(data),
        put: (id: string, data: any) => this.pacienteService.putIndicacionesPeso(id, data)
      },
      'signos vitales': {
        get: (id: string) => this.pacienteService.getIndicacionesCovid(id),
        post: (data: any) => this.pacienteService.postIndicacionesCovid(data),
        put: (id: string, data: any) => this.pacienteService.putIndicacionesCovid(id, data)
      }
    }[tipo];
  }

  instanciarClase() {
    switch (this.tipoSeleccionado) {
      case 'glucosa': return new IndicacionesGlu();
      case 'presion arterial': return new IndicacioesPA();
      case 'peso': return new IndicacionesPeso();
      case 'signos vitales': return new InicacionesCovid();
      default: return {};
    }
  }

  isPeriodoActivo(i: number): boolean {
    const hora = this.indicacion?.[this.tipoAbreviado + (i + 1) + 'hora'];
    const diasActivos = this.dias.some(dia => this.indicacion?.[this.tipoAbreviado + (i + 1) + dia]);
    return !!hora && hora !== '00:00:00' && diasActivos;
  }

  togglePeriodoActivo(i: number, checked: boolean): void {
    const horaKey = this.tipoAbreviado + (i + 1) + 'hora';
  
    if (checked) {
      this.indicacion[horaKey] = (this.tipoSeleccionado === 'glucosa' && i === 7) ? '03:00:00' : '08:00:00';
      
      // activar todos los días al seleccionar
      for (let dia of this.dias) {
        this.indicacion[this.tipoAbreviado + (i + 1) + dia] = true;
      }
    } else {
      this.indicacion[horaKey] = (this.tipoSeleccionado === 'glucosa' && i === 7) ? '03:00:00' : '00:00:00';
      
      // desactivar todos los días
      for (let dia of this.dias) {
        this.indicacion[this.tipoAbreviado + (i + 1) + dia] = false;
      }
    }
  }

  onHoraChange(i: number) {
    const horaKey = this.tipoAbreviado + (i + 1) + 'hora';
    if (this.tipoSeleccionado === 'glucosa' && i === 7) {
      this.indicacion[horaKey] = '03:00:00';
    }
  }
}
