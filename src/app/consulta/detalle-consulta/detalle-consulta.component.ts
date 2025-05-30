import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ConsultaService } from '../consulta.service';
import { CiesService } from 'src/app/core/services/cies.service';
import { PacienteService } from 'src/app/pacientes/paciente.service';
import { PatientView } from 'src/app/core/models/pacientes/paciente.model';
import { SwalService } from 'src/app/core/services/swal.service';
import { PadecimientoView } from 'src/app/core/models/shared/padecimiento.model';
import { ConsultaView, TratamientoView,SignosVitales } from 'src/app/core/models/shared/consulta.model';

@Component({
  selector: 'app-detalle-consulta',
  templateUrl: './detalle-consulta.component.html',
  styleUrls: ['./detalle-consulta.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetalleConsultaComponent implements OnInit {
  tabActivo: string = 'subjetivo';
  idPaciente!: string;
  idConsulta!: string|number;
  pacienteActual!: PatientView;
  sexo!: string;
  edad!: number;

  idGroup: number = 1; // Ajusta según tu lógica
  ultimaConsultaModel: ConsultaView = new ConsultaView();
  consultaSeleccionada: ConsultaView = null;

  acordeonAbierto = false;
  diagnosticoControl = new FormControl();
  diagnosticosFiltrados: any[] = [];

  tratamientoControl = new FormControl();
  tratamientosFiltrados: any[] = [];
  today: Date = new Date();
  consultaModel: ConsultaView = new ConsultaView();
  diagnosticoSeleccionado: any = null;
  esPresuntivo: boolean = true;
  cargandoConsulta: boolean = false;
  activeTab: string = 'resumen'; // Valor por defecto
  activeTab2: string = 'subjetivo'; // Valor por defecto
  tabs: string[] = ['resumen', 'subjetivo', 'objetivo', 'analisis', 'tratamiento'];

  tabsTitulos = [
    { valor: 'subjetivo', titulo: 'SUBJETIVO', icono: 'fa-bars', inicial: 'S' },
    { valor: 'objetivo', titulo: 'OBJETIVO', icono: 'fa-stethoscope', inicial: 'O' },
    { valor: 'analisis', titulo: 'ANALISIS', icono: 'fa-clipboard', inicial: 'A' },
    { valor: 'plan', titulo: 'PLAN TERAPEUTICO Y TRATAMIENTO', icono: 'fa-notes-medical', inicial: 'P' }
  ];
  tratamientoSeleccionado: any = null;
  acordeones = [
    { titulo: 'FORMATOS' },
    { titulo: 'ESTUDIOS' },
    { titulo: 'IMÁGENES' },
    { titulo: 'DOCUMENTOS' },
    { titulo: 'RECETAS' }
  ];
  
  dolometros = [
    { nivel: 1, doloDescripcion: 'DOLOR LEVE' },
    { nivel: 2, doloDescripcion: 'DOLOR MODERADO' },
    { nivel: 3, doloDescripcion: 'DOLOR SEVERO' }
  ];


camposVitalesInline = [
  { prop: 'temperatura', label: 'TEMPERATURA', unidad: '°C' },
  { prop: 'peso', label: 'PESO', unidad: 'KG' },
  { prop: 'talla', label: 'TALLA', unidad: 'CM' },
  { prop: 'imc', label: 'IMC', unidad: '' },
  { prop: 'frecCardiaca', label: 'F.C.', unidad: 'x min.' },
  { prop: 'frecRespiratoria', label: 'F.R.', unidad: 'x min.' },
  { prop: 'saturacionOxigeno', label: 'SO₂', unidad: '%' },
  { prop: 'evn', label: 'EVN', unidad: '' }
];


dolometroLevelIcons = {
  1: 'fa fa-smile',
  2: 'fa fa-meh',
  3: 'fa fa-frown'
};

  constructor(
    private route: ActivatedRoute,
    private consultaService: ConsultaService,
    private ciesService: CiesService,
    private pacienteService: PacienteService,
    private swal: SwalService
  ) {}

  ngOnInit(): void {
    // Asegurar estructura base de la consulta
    this.consultaModel = new ConsultaView();
    this.consultaModel.listaTartamiento = [];
    this.consultaModel.listaPadecimiento = [];
    this.consultaModel.signosVitales = new SignosVitales();
  
    this.route.parent?.params.subscribe(params => {
      this.idPaciente = params['idPaciente'];
  
      this.pacienteService.getPacienteById(this.idPaciente).subscribe(p => {
        this.pacienteActual = p;
        this.sexo = p.sexo?.toUpperCase?.() || 'N/A';
        this.edad = Math.abs(
          new Date(Date.now() - new Date(p.fechaNacimiento).getTime()).getUTCFullYear() - 1970
        );
      });
  
      // Cargar la última consulta del paciente
      this.consultaService.getUltimaConsulta(this.idPaciente, this.idGroup).subscribe(ultima => {
        this.ultimaConsultaModel = ultima;
      });
    });
  
    this.route.queryParams.subscribe(params => {
      this.idConsulta = +params['idConsulta'];
      this.consultaModel.idConsulta = this.idConsulta;
  
      this.consultaService.getConsultaById(this.idConsulta).subscribe(consulta => {
        this.consultaModel = consulta;
  
        // Asegurar que signosVitales siempre esté definido
        if (!this.consultaModel.signosVitales) {
          this.consultaModel.signosVitales = new SignosVitales();
        }
  
        this.consultaModel.numeroConsulta = String(consulta.numeroConsulta);
      });
    });
  
    this.diagnosticoControl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap(value => this.buscarDiagnosticos(value))
      )
      .subscribe(data => {
        this.diagnosticosFiltrados = data;
      });
  
    this.tratamientoControl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap(value => this.buscarTratamientos(value))
      )
      .subscribe(data => {
        this.tratamientosFiltrados = data;
      });
  }

  validar(campo: string) {
    // Validación básica o personalizada aquí
    console.log('Validando campo:', campo, '=>', this.consultaModel.signosVitales[campo]);
  }
  abrirExploracionFisicaModal() {
    console.log('Modal de exploración física solicitado');
    // Aquí abrirías tu modal de Bootstrap o Angular Material
  }
  dataChange() {
    // Aquí puedes lanzar flags o emitir eventos si lo necesitas
    console.log('Datos subjetivos actualizados', this.consultaModel.subjetivo);
  }

  seleccionarDolometro(dolometro: any) {
    this.consultaModel.catDolometroView = dolometro;
    this.dataChange();
  }

  toggleAcordeon() {
    this.acordeonAbierto = !this.acordeonAbierto;
  
    if (this.acordeonAbierto) {
      this.cargarDetalle('ultimaConsulta');
      this.verConsultaDetalle(this.ultimaConsultaModel);
    }
  }

  verConsultaDetalle(consulta: ConsultaView): void {

    this.cargandoConsulta = true;
    this.consultaSeleccionada = null;
  
    this.consultaService.getConsultaById(consulta.idConsulta).subscribe({
      next: (resp) => {
        // this.consultaSeleccionada = resp;
        this.consultaSeleccionada = {
          ...resp,
          signosVitales: Object.assign(new SignosVitales(), resp.signosVitales)
        };
      },
      error: () => {
        this.swal.error('No se pudo cargar la información de la consulta');
      },
      complete: () => {
        this.cargandoConsulta = false;
      }
    });
  }

  toggleTab(tab: string): void {
    this.activeTab = tab;
  }
  toggleTabTitutlo(tab: string): void {
    this.activeTab2 = tab;
  }

  


  cargarDetalle(panel: string): void {
    switch (panel.toLowerCase()) {
      case 'formatos':
        console.log('Cargar formatos...');
        // this.consultaService.getFormatos(this.ultimaConsultaModel.idConsulta).subscribe(...)
        break;
      case 'estudios':
        console.log('Cargar estudios...');
        break;
      case 'imágenes':
        console.log('Cargar imágenes...');
        break;
      case 'documentos':
        console.log('Cargar documentos...');
        break;
      case 'recetas':
        console.log('Cargar recetas...');
        break;
      default:
        console.warn('Panel desconocido:', panel);
        break;
    }
  }

  buscarDiagnosticos(texto: string): Observable<any[]> {
    if (!texto || texto.length < 3) {
      return new Observable(obs => obs.next([]));
    }
    return this.ciesService.buscarDiagnosticosCIE10(texto, this.sexo, this.edad);
  }

  buscarTratamientos(texto: string): Observable<any[]> {
    if (!texto || texto.length < 3) {
      return new Observable(obs => obs.next([]));
    }
    return this.ciesService.buscarTratamientosCIE9(texto, this.sexo, this.edad);
  }

  agregarDiagnostico(diagnostico: any): void {
    // if (!this.consultaModel.listaPadecimiento) {
    //   this.consultaModel.listaPadecimiento = [];
    // }

    // if (this.consultaModel.listaPadecimiento.length >= 3) {
    //   this.swal.info('Solo puedes agregar hasta 3 diagnósticos');
    //   this.diagnosticoControl.setValue('');
    //   return;
    // }

    // const yaExiste = this.consultaModel.listaPadecimiento.some(
    //   d => d.cie10Id === diagnostico.idCie10
    // );
    // if (!yaExiste) {
    //   const nuevoPadecimiento: PadecimientoView = {
    //     idPadecimiento: 0,
    //     consultaId: Number(this.idConsulta),
    //     cie10Id: diagnostico.idCie10,
    //     nombrePadecimiento: `${diagnostico.catalogKey} ${diagnostico.nombre}`,
    //     catalogKey: diagnostico.catalogKey,
    //     resumen: '',
    //     diagnostico: '',
    //     fechaCreacion: new Date(),
    //     estatus: true,
    //     idPaciente: this.idPaciente,
    //     idMedico: 'ID_MEDICO',
    //     creadoPor: 'USUARIO_ACTUAL',
    //     nombreMedicoTratante: 'NOMBRE_MEDICO',
    //     idMedicoTratante: 'ID_MEDICO_TRATANTE',
    //     presuntivo: true,
    //     fechaAlta: new Date(),
    //     estudioLaboratorioViewList: [],
    //     documentosViewList: []
    //   };
    //   this.consultaModel.listaPadecimiento.push(nuevoPadecimiento);
    // }

    // this.diagnosticoControl.setValue('');
  }

  agregarDiagnosticoDesdeBoton(): void {
    if (!this.diagnosticoSeleccionado || !this.consultaModel.analisis || !this.consultaModel.pronostico) {
      this.swal.info('los diagnósticos deben tener un pronostico y una impresion');
      return;
    }
  
    if (this.consultaModel.listaPadecimiento.length >= 3) {
      this.swal.info('Solo puedes agregar hasta 3 diagnósticos');
      return;
    }
  
    const yaExiste = this.consultaModel.listaPadecimiento.some(
      d => d.cie10Id === this.diagnosticoSeleccionado.idCie10
    );
  
    if (!yaExiste) {
      const nuevoPadecimiento: PadecimientoView = {
        idPadecimiento: 0,
        consultaId: Number(this.idConsulta),
        cie10Id: this.diagnosticoSeleccionado.idCie10,
        nombrePadecimiento: `${this.diagnosticoSeleccionado.catalogKey} ${this.diagnosticoSeleccionado.nombre}`,
        catalogKey: this.diagnosticoSeleccionado.catalogKey,
        resumen: '',
        diagnostico: '',
        fechaCreacion: new Date(),
        estatus: true,
        idPaciente: this.idPaciente,
        idMedico: 'ID_MEDICO',
        creadoPor: 'USUARIO_ACTUAL',
        nombreMedicoTratante: 'NOMBRE_MEDICO',
        idMedicoTratante: 'ID_MEDICO_TRATANTE',
        presuntivo: this.esPresuntivo,
        fechaAlta: new Date(),
        estudioLaboratorioViewList: [],
        documentosViewList: []
      };
  
      this.consultaModel.listaPadecimiento.push(nuevoPadecimiento);
      this.diagnosticoSeleccionado = null;
      this.diagnosticoControl.setValue('');
      this.consultaModel.analisis = '';
      this.consultaModel.pronostico = '';
    }
  }

  limpiarBusquedaDiagnostico(): void {
    this.diagnosticoSeleccionado = null;
    this.diagnosticoControl.setValue('');
  }

  agregarTratamiento(tratamiento: any): void {
   //const yaExiste = this.consultaModel.listaTartamiento.some(
   //  t => t.catCie9Id === tratamiento.idCie9
   //);
   //if (!yaExiste) {
   //  const nuevoTratamiento: TratamientoView = {
   //    idTratamiento: 0,
   //    consultaId: Number(this.idConsulta),
   //    catCie9Id: tratamiento.idCie9,
   //    catalogKey: tratamiento.catalogKey,
   //    proNombre: tratamiento.proNombre,
   //    fechaCreacion: new Date()
   //  };
   //  this.consultaModel.listaTartamiento.push(nuevoTratamiento);
   //}

   //this.tratamientoControl.setValue('');
  }


  limpiarBusquedaTratamiento() {
    this.tratamientoSeleccionado = null;
    this.tratamientoControl.setValue('');
  }
  
  agregarTratamientoDesdeBoton() {
    if (!this.tratamientoSeleccionado) return;
  
    const existe = this.consultaModel.listaTartamiento.some(
      t => t.catCie9Id === this.tratamientoSeleccionado.idCie9
    );
    if (!existe) {
      this.consultaModel.listaTartamiento.push({
        idTratamiento: 0,
        consultaId: this.consultaModel.idConsulta,
        catCie9Id: this.tratamientoSeleccionado.idCie9,
        catalogKey: this.tratamientoSeleccionado.catalogKey,
        proNombre: this.tratamientoSeleccionado.proNombre,
        fechaCreacion: new Date()
      });
    }
  
    this.tratamientoSeleccionado = null;
    this.tratamientoControl.setValue('');
  }

  eliminarDiagnostico(cie10Id: number): void {
    this.swal.confirm('¿Deseas eliminar este diagnóstico?', 'Esta acción no se puede deshacer')
      .then((result) => {
        if (result.isConfirmed) {
          this.consultaModel.listaPadecimiento =
            this.consultaModel.listaPadecimiento.filter(d => d.cie10Id !== cie10Id);
        }
      });
  }

  eliminarTratamiento(catCie9Id: number): void {
    this.swal.confirm('¿Deseas eliminar este tratamiento?', 'Esta acción no se puede deshacer')
      .then((result) => {
        if (result.isConfirmed) {
          this.consultaModel.listaTartamiento =
            this.consultaModel.listaTartamiento.filter(t => t.catCie9Id !== catCie9Id);
        }
      });
  }

  displayDiagnosticoFn(d: any): string {
    return d ? `${d.catalogKey} - ${d.nombre}` : '';
  }

  displayTratamientoFn(t: any): string {
    return t ? `${t.catalogKey} - ${t.proNombre}` : '';
  }

  guardarConsulta() {
    console.log('Consulta guardada:', this.consultaModel);
    // Aquí invocarías tu servicio HTTP
  }
}
