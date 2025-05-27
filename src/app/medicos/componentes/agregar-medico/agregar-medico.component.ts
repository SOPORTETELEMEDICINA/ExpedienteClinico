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
    { label: 'Nombre', control: 'nombre', required: true },
    { label: 'Apellido Paterno', control: 'apellidoPaterno', required: true },
    { label: 'Apellido Materno', control: 'apellidoMaterno' },
    { label: 'CURP', control: 'curp' },
    { label: 'RFC', control: 'rfc' },
    { label: 'Teléfono Fijo', control: 'telefonoFijo' },
    { label: 'Teléfono Móvil', control: 'telefonoMovil' },
    { label: 'Email', control: 'email' },
    { label: 'Usuario', control: 'userName', required: true },
    { label: 'Contraseña', control: 'password', type: 'password', required: true },
    { label: 'Lugar de Nacimiento', control: 'lugarNacimiento' },
    { label: 'Sexo', control: 'sexo' },
    { label: 'Fecha de Nacimiento', control: 'fechaNacimiento', type: 'date' }
  ];

  domicilioInputs = [
    { label: 'Domicilio', key: 'domicilio', required: true },
    { label: 'Localidad', key: 'localidad' },
    { label: 'Municipio', key: 'municipio' },
    { label: 'Estado', key: 'estado' },
    { label: 'País', key: 'pais' },
    { label: 'Código Postal', key: 'cp', required: true },
    { label: 'Teléfono', key: 'telefonoFijo' },
    { label: 'Horario', key: 'horarioAtencion' }
  ];

  especialidadInputs = [
    { label: 'Especialidad', key: 'especialidad' },
    { label: 'Universidad', key: 'universidad' },
    { label: 'Cédula', key: 'cedula' }
  ];

  horarioInputs = [
    { label: 'Día', key: 'dia' },
    { label: 'Hora Inicio', key: 'horaInicio' },
    { label: 'Hora Fin', key: 'horaFin' }
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
      console.log('Guardando médico:', data);
      // TODO: llamar a servicio para guardar médico
    } else {
      console.warn('Formulario inválido');
    }
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      console.log('Archivo seleccionado:', file.name);
      // TODO: cargar imagen en modelo si aplica
    }
  }
}
