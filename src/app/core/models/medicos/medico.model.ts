// medico.model.ts
import { EspecialidadView } from './especialidad.model'
import { DomicilioView } from './domicilio.model';
import { MedicoFirmaView } from './medico-firma.model';
import { UserAppView } from '../shared/user-app.model';

export class MedicoView {
  idMedico: string;
  apellidoMaterno: string = "";
  apellidoPaterno: string = "";
  nombre: string = "";
  userName: string;
  lugarNacimiento: string;
  curp: string;
  rfc: string;
  telefonoFijo: string;
  telefonoMovil: string;
  email: string;
  idUsuario: number;
  activo: boolean;
  fechaNacimiento: Date;
  especialidadViewList: EspecialidadView[];
  domicilioViewList: DomicilioView[];
  medicofirma : MedicoFirmaView;
  estadoCivil: string;
  fechaCreacion: Date;
  sexo: string;
  fullName: string;
  userAppView?: UserAppView;
  id_cat_nacionalidades:number;
  id_cat_entidades:number;
  id_institucion:number;
  per_id:number;
  act_id:number;
  atr_id:number;
  Id_cat_clues:number;
  id_cat_clues:number;
  jor_id:number;
  id_cat_especialidades:number;
  con_id:number;
  pla_id:number;
}