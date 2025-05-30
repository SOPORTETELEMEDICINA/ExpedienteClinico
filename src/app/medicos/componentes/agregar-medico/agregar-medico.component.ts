import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { diasSemana } from 'src/app/core/constants/dias-semana.constants';

@Component({
  selector: 'app-agregar-medico',
  templateUrl: './agregar-medico.component.html'
})
export class AgregarMedicoComponent implements OnInit {
  formularioMedico!: FormGroup;
  currentTab: number = 0;
  isEditingDoctor = false;

  diasSemana = diasSemana;

  nuevoDomicilio: any = {
    domicilio: '', localidad: '', municipio: '', estado: '', pais: '', cp: '', telefonoFijo: '', horarioAtencion: ''
  };

  nuevaEspecialidad: any = {
    especialidad: '', universidad: '', cedula: ''
  };

  nuevoHorario: any = {
    dia: '', horaInicio: '', horaFin: ''
  };

  generalFields = [
    { label: 'NOMBRE', control: 'nombre', required: true },
    { label: 'APELLIDO PATERNO', control: 'apellidoPaterno', required: true },
    { label: 'APELLIDO MATERNO', control: 'apellidoMaterno' },
    { label: 'CURP', control: 'curp' },
    { label: 'RFC', control: 'rfc' },
    { label: 'TELEFONO FIJO', control: 'telefonoFijo' },
    { label: 'TELEFONO MOVIL', control: 'telefonoMovil' },
    { label: 'EMAIL', control: 'email' },
    { label: 'USUARIO', control: 'userName', required: true },
    { label: 'CONTRASEÑA', control: 'password', type: 'password', required: true },
    { label: 'LUGAR DE NACIMIENTO', control: 'lugarNacimiento' },
    { label: 'SEXO', control: 'sexo' },
    { label: 'FECHA DE NACIMIENTO', control: 'fechaNacimiento', type: 'date' }
  ];

  domicilioInputs = [
    { label: 'DOMICILIO', key: 'domicilio', required: true },
    { label: 'LOCALIDAD', key: 'localidad' },
    { label: 'MUNICIPIO', key: 'municipio' },
    { label: 'ESTADO', key: 'estado' },
    { label: 'PAIS', key: 'pais' },
    { label: 'CODIGO POSTAL', key: 'cp', required: true },
    { label: 'TELEFONO', key: 'telefonoFijo' },
    { label: 'HORARIO', key: 'horarioAtencion' }
  ];

  especialidadInputs = [
    { label: 'ESPECIALIDAD', key: 'especialidad' },
    { label: 'UNIVERSIDAD', key: 'universidad' },
    { label: 'CEDULA', key: 'cedula' }
  ];

  horarioInputs = [
    { label: 'DIA', key: 'dia' },
    { label: 'HORA INICIO', key: 'horaInicio' },
    { label: 'HORA FIN', key: 'horaFin' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formularioMedico = this.fb.group({
      nombre: [''], apellidoPaterno: [''], apellidoMaterno: [''],
      curp: [''], rfc: [''], telefonoFijo: [''], telefonoMovil: [''],
      email: [''], userName: [''], password: [''], lugarNacimiento: [''],
      sexo: [''], fechaNacimiento: [''],
      domicilios: this.fb.array([]),
      especialidades: this.fb.array([]),
      horarios: this.fb.array([])
    });
  }

  cambiarTab(index: number) {
    this.currentTab = index;
  }

  getDomicilios(): FormArray {
    return this.formularioMedico.get('domicilios') as FormArray;
  }

  agregarDomicilio(): void {
    this.getDomicilios().push(this.fb.group({
      domicilio: [this.nuevoDomicilio.domicilio],
      localidad: [this.nuevoDomicilio.localidad],
      municipio: [this.nuevoDomicilio.municipio],
      estado: [this.nuevoDomicilio.estado],
      pais: [this.nuevoDomicilio.pais],
      cp: [this.nuevoDomicilio.cp],
      telefonoFijo: [this.nuevoDomicilio.telefonoFijo],
      horarioAtencion: [this.nuevoDomicilio.horarioAtencion]
    }));
    this.nuevoDomicilio = { domicilio: '', localidad: '', municipio: '', estado: '', pais: '', cp: '', telefonoFijo: '', horarioAtencion: '' };
  }

  eliminarDomicilio(index: number): void {
    this.getDomicilios().removeAt(index);
  }

  getEspecialidades(): FormArray {
    return this.formularioMedico.get('especialidades') as FormArray;
  }

  agregarEspecialidad(): void {
    this.getEspecialidades().push(this.fb.group({
      especialidad: [this.nuevaEspecialidad.especialidad],
      universidad: [this.nuevaEspecialidad.universidad],
      cedula: [this.nuevaEspecialidad.cedula]
    }));
    this.nuevaEspecialidad = { especialidad: '', universidad: '', cedula: '' };
  }

  eliminarEspecialidad(index: number): void {
    this.getEspecialidades().removeAt(index);
  }

  getHorarios(): FormArray {
    return this.formularioMedico.get('horarios') as FormArray;
  }

  agregarHorario(): void {
    this.getHorarios().push(this.fb.group({
      dia: [this.nuevoHorario.dia],
      horaInicio: [this.nuevoHorario.horaInicio],
      horaFin: [this.nuevoHorario.horaFin]
    }));
    this.nuevoHorario = { dia: '', horaInicio: '', horaFin: '' };
  }

  eliminarHorario(index: number): void {
    this.getHorarios().removeAt(index);
  }

  guardarMedico(): void {
    if (this.formularioMedico.valid) {
      const data = this.formularioMedico.value;
      console.log('Guardando mEdico:', data);
      // TODO: llamar a servicio para guardar mEdico
    } else {
      console.warn('Formulario inválido');
    }
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      console.log('ARCHIVO SELECCIONADO:', file.name);
      // TODO: cargar imagen en modelo si aplica
    }
  }
}
