import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ComunService } from 'src/app/shared/data/comunService';
import { CatalogosService } from 'src/app/shared/data/CatalogosService';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html'
})
export class CrearPacienteComponent implements OnInit {
  currentTab = 0;

  formDatosGenerales: FormGroup;
  formDatosClinicos: FormGroup;
  formContacto: FormGroup;
  domicilios: FormArray;
  contactos: FormArray;

  escolaridades: any[] = [];
  tiposSangre: any[] = [];
  discapacidades: any[] = [];
  instituciones: any[] = [];
  nacionalidades: any[] = [];
  religiones: any[] = [];
  estadosCiviles: any[] = [];
  sexos: any[] = [];
  parentescos: any[] = [];
  convivencias: any[] = [];
  prioridades: any[] = ['Alta', 'Media', 'Baja'];

  nuevoDomicilio: any = {
    domicilio: '',
    codigoPostal: '',
    localidad: '',
    municipio: '',
    estado: '',
    pais: ''
  };

  nuevoContacto: any = {
    nombre: '',
    edad: '',
    parentesco: '',
    convivencia: '',
    prioridad: '',
    telefonoLocal: '',
    telefonoCelular: '',
    telefonoOficina: '',
    cuentaConLlaves: false
  };

  seguimientoCronico = [
    { label: 'Glucosa', control: 'seguimientoGlucosa' },
    { label: 'Presión', control: 'seguimientoPresion' },
    { label: 'Oxigenación', control: 'seguimientoOxigenacion' },
    { label: 'Peso', control: 'seguimientoPeso' },
  ];

  constructor(
    private fb: FormBuilder,
    private catalogosService: CatalogosService,
    private comunService: ComunService // 🔥 AÑADIDO
  ) {}

  ngOnInit(): void {
    this.initForms();
    this.cargarCatalogos();
  }

  initForms(): void {
    this.formDatosGenerales = this.fb.group({
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: [''],
      fechaNacimiento: ['', Validators.required],
      curp: [''],
      rfc: [''],
      sexo: [''],
      estadoCivil: [''],
      religion: [''],
      telefonoLocal: [''],
      telefonoCelular: [''],
      email: [''],
      nacionalidad: [''],
      username: [''],
      password: [''],
      domicilios: this.fb.array([])
    });

    this.formDatosClinicos = this.fb.group({
      escolaridad: [''],
      ocupacion: [''],
      empresa: [''],
      tipoSangre: [''],
      alergias: [''],
      transfusiones: [''],
      discapacidad: [''],
      antecedentes: [''],
      institucion: [''],
      numeroAfiliacion: [''],
      seguimientoGlucosa: [false],
      seguimientoPresion: [false],
      seguimientoOxigenacion: [false],
      seguimientoPeso: [false]
    });

    this.formContacto = this.fb.group({
      nombre: [''],
      edad: [''],
      parentesco: [''],
      convivencia: [''],
      prioridad: [''],
      telefonoLocal: [''],
      telefonoCelular: [''],
      telefonoOficina: [''],
      cuentaConLlaves: [false],
      contactos: this.fb.array([])
    });
  }

  getDomicilios(): FormArray {
    return this.formDatosGenerales.get('domicilios') as FormArray;
  }

  getContactos(): FormArray {
    return this.formContacto.get('contactos') as FormArray;
  }

  agregarDomicilio(): void {
    this.getDomicilios().push(this.fb.group({ ...this.nuevoDomicilio }));
    this.nuevoDomicilio = { domicilio: '', codigoPostal: '', localidad: '', municipio: '', estado: '', pais: '' };
  }

  eliminarDomicilio(index: number): void {
    this.getDomicilios().removeAt(index);
  }

  agregarContacto(): void {
    this.getContactos().push(this.fb.group({ ...this.nuevoContacto }));
    this.nuevoContacto = {
      nombre: '', edad: '', parentesco: '', convivencia: '', prioridad: '',
      telefonoLocal: '', telefonoCelular: '', telefonoOficina: '', cuentaConLlaves: false
    };
  }

  eliminarContacto(index: number): void {
    this.getContactos().removeAt(index);
  }

  cambiarTab(index: number): void {
    this.currentTab = index;
  }

  guardarPaciente(): void {
    if (this.formDatosGenerales.valid && this.formDatosClinicos.valid && this.formContacto.valid) {
      const datos = {
        ...this.formDatosGenerales.value,
        datosClinicos: this.formDatosClinicos.value,
        contactos: this.getContactos().value
      };
      console.log('Datos a guardar:', datos);
    }
  }

  cargarCatalogos(): void {
    // ✅ CatalogosService (si los tienes conectados a base de datos, se quedan)

    this.catalogosService.getCatalogoFormacion().subscribe(r => this.escolaridades = r);
    this.catalogosService.getDiscapacidadesPage().subscribe(r => this.discapacidades = r.content);
    this.catalogosService.getInstituPage().subscribe(r => this.instituciones = r.content);
    
    this.catalogosService.getCatalogoNacionalidades().subscribe(r => this.nacionalidades = r);
    this.catalogosService.getCatalogoReligiones().subscribe(r => this.religiones = r);


    //this.comunService.getEstadoCivil().subscribe(r => this.estadosCiviles = r);
    // this.catalogosService.getCatalogoSexo().subscribe(r => this.sexos = r);

    // // ✅ ComunService para los que venían vacíos o con [Object object]

    this.estadosCiviles = this.comunService.getEstadoCivil();
    this.tiposSangre = this.comunService.getTipoSangre();
    this.parentescos = this.comunService.getParentesco();
    //this.comunService.getParentesco().subscribe(r => this.parentescos = r);

    this.convivencias = this.comunService.getCatConvivencia();
  }
}
