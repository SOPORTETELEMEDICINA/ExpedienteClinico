import {DomicilioView} from "../medicos/domicilio.model";
import { ConsultaView } from "../shared/consulta.model";
import { PadecimientoView } from "../shared/padecimiento.model";

export class PatientPageView {
    fechaCreacion: Date;
    idPaciente: string;
    idUsuario: number;
    idGroup: number=0;
    Grupo: string;
    nombre: string;
    userName:string;
}
export class PatientCanalizadoPageView {
    fechaCreacion: Date;
    idPaciente: string;
    idUsuario: number;
    idGroup: number;
    Grupo: string;
    nombre: string;
    userName:string;
}

export class Tutor{
    idPaciente:string;
}
export class RelTutor{
    idTutor:number; 
    idPacTutor:string;
    parentesco:string;
}



export class TitularSet{
    idPacienteTitular:string; 
    idPacienteBeneficiario:string;
    parentesco:string;
}

export class TitularGet{
    IDPACIENTE:string; 
    NOMBRECOMPLETO:string;
    TELEFONO:string;
    EMAIL:string;

}

export class BeneficiarioSet{
    idTutor:string; 
    idPacTutor:string;
    parentesco:string;
}

export class BeneficiarioGet{
    IDPACIENTETITULAR:string; 
    IDPACIENTE:string; 
    IDPACIENTEBeneficiario:string; 
    NOMBRECOMPLETO:string;
    TELEFONO:string;
    EMAIL:string;
    PARENTESCO:string;

}

export class TutorSet{
    idTutor:string; 
    idPacTutor:string;
    parentesco:string;
}

export class TutorGet{
    idRelacion:string; 
    idTutor:string; 
    idPacTutor:string; 
    nombreTutor:string;
    telefono:string;
    email:string;
    parentesco:string;

}






export class PatientView {
    activo: boolean;
    es_titular:boolean;
    afiliacion: string;
    alergias: string;
    apellidoMaterno: string = "";
    apellidoPaterno: string = "";
    curp: string;
    esCanalizado:boolean=false;
    datosAdicionalesView: DatosAdicionalesView;
    datosContactoViewList: DatosContactoView[];
    domicilioViewList: DomicilioView[];
    email: string;
    estadoCivil: string;
    fechaCreacion: Date;
    fechaNacimiento: Date;
    idPaciente: string;
    idUsuario: number;
    lugarNacimiento: string;
    nombre: string = "";
    numeroAfiliacion: string;
    numeroExpediente: number;
    padecimientoCronico: string;
    personasViviendaViewList: PersonasViviendaView[];
    religion: string;
    rfc: string;
    servicioAdicionalesViewList: ServicioAdicionalesView[];
    catServiciosList: CatServicioView[];
    sexo: string;
    telefonoCelular: string;
    telefonoLocal: string;
    tipoSangre: string;
    factorRh: string;
    userName: string;
    idDevice: string = "";
    transfusiones: string = "";
    clave_elector: string = "";
    pacienteAtendido:boolean=false;
}

export class DatosContactoView {
    convivencia: string;
    cuentaConLlaves: boolean;
    edad: number;
    fechaCreacion: Date;
    idDatosContacto: string;
    llamarCasoEmergencia: number;
    nombre: string;
    parentesco: string;
    prioridad: string;
    telefonoCelular: string;
    telefonoLocal: string;
    telefonoOficina: string;
    tipoApoyoEmocional: string;
    tipoApoyoInstrumental: string;
    tipoApoyoMaterial: string;
    tipoApoyoSocial: string;
}



export class CatServicioView {
  idCatServicio: number;
  nombre : string;
}



export interface ServicioAdicionalesView {
    comentarios: string;
    domicilio: string;
    fechaCreacion: Date;
    idServicioAdicionales: string;
    nombre: string;
    tipoServicio: string;
}

export interface PersonasViviendaView {
    convivencia: string;
    edad: number;
    fechaCreacion: Date;
    idPersonasVivienda: string;
    parentesco: string;
}

export class DatosAdicionalesView {
    antecedentes: string;
    escolaridad: string;
    fechaCreacion: Date;
    idDatosAdicionales: string;
    lenguaIndigena: string;
    localidad: string;
    ocupacion: string;
    ocupacionAnterior: string;
    origenEtnico: string;
    viveSolo: boolean;
}

export class HeredoFamiliarView {
    activo?: boolean;
    comentarios?: string = '';
    creadoPor?: string = '';
    fechaCreacion?: Date;
    idHeredoFamiliar?: number;
    idPaciente?: string = '';
    otrosPadecimientoHeredoFamiliaresViewList: OtrosPadecimientoHeredoFamiliaresView[] = [];
    padecimientoHeredoFamiliaresViewList: PadecimientoHeredoFamiliaresView[] = [];
    ultimaModificacion?: Date;
}

export class PadecimientoHeredoFamiliaresView {
    abuelosMaternos?: boolean;
    abuelosPaternos?: boolean;
    cie10Id?: number;
    hermanos?: boolean;
    idPadecimientoHeredoFamiliares?: number;
    madre?: boolean;
    padre?: boolean;
    tiosMaternos?: boolean;
    tiosPaternos?: boolean;
    tipoCancerAbuelosMaternos?: string = '';
    tipoCancerAbuelosPaternos?: string = '';
    tipoCancerHermanos?: string = '';
    tipoCancerMadre?: string = '';
    tipoCancerPadre?: string = '';
    tipoCancerTiosMaternos?: string = '';
    tipoCancerTiosPaternos?: string = '';
    tipoCardioAbuelosMaternos?: string = '';
    tipoCardioAbuelosPaternos?: string = '';
    tipoCardioHermanos?: string = '';
    tipoCardioMadre?: string = '';
    tipoCardioPadre?: string = '';
    tipoCardioTiosMaternos?: string = '';
    tipoCardioTiosPaternos?: string = '';
    tipoDescripcion?: string = '';
}

export class OtrosPadecimientoHeredoFamiliaresView {
    abuelosMaternos?: boolean;
    abuelosPaternos?: boolean;
    descripcion?: string = '';
    hermanos?: boolean;
    idOtrosPadecimientoHeredoFamiliares?: number;
    madre?: boolean;
    padre?: boolean;
    tiosMaternos?: boolean;
    tiosPaternos?: boolean;
}

export class PersonalPatologicoView {
    activo: boolean;
    alergias: string = '';
    cirugias: string = '';
    creadoPor: string = '';
    fechaCreacion?: Date;
    idPaciente: string = '';
    idPersonalPatologico?: number;
    padecimientoPersonalPatologicoViewList: PadecimientoPersonalPatologicoView[];
    ultimaModificacion?: Date;
}

export class PadecimientoPersonalPatologicoView {
    anios: number;
    cie10Id: number;
    idPadecimientoPersonalPatologico: number;
    meses: number;
    tipo: string = '';
    tratamiento: string = '';
}

export class PersonalNoPatologicoView {
    actividadDeportivaView?: ActividadDeportivaView;
    activo?: boolean;
    comentarioMascotas?: string = '';
    creadoPor?: string = '';
    detalleViviendaView?: DetalleViviendaView;
    fechaCreacion?: Date;
    habitoAlimenticioView?: HabitoAlimenticioView;
    habitoHigienicoView?: HabitoHigienicoView;
    historiaLaboralViewList?: HistoriaLaboralView[];
    idPaciente?: string = '';
    idPersonalNoPatologico?: number;
    mascotas?: boolean;
    transfusiones?: boolean;
    ultimaModificacion?: Date;
}

export class ActividadDeportivaView {
    actividad?: boolean;
    frecuencia?: string = '';
    idActividadDeportiva?: number;
    tipoActividad?: string = '';
}

export class DetalleViviendaView {
    alacranes?: boolean;
    aranias?: boolean;
    cocinaCarbon?: boolean;
    cocinaGas?: boolean;
    cocinaLenia?: boolean;
    faunaNociva?: boolean;
    idDetalleVivienda?: number;
    numeroBanios?: string = '';
    numeroHabitaciones?: number;
    otro?: string = '';
    productosNocivos?: boolean;
    serpientes?: boolean;
    servAgua?: boolean;
    servAlcantarillado?: boolean;
    servElectricidad?: boolean;
    servRecoleccionBasura?: boolean;
    tipoPiso?: string = '';
    tipoTecho?: string = '';
}

export class HabitoAlimenticioView {
    calidad?: string = '';
    cantidad?: string = '';
    comentarios?: string = '';
    idHabitoAlimenticio?: number;
}

export class HabitoHigienicoView {
    aseoBucal?: string = '';
    banio?: string = '';
    idHabitoHigienico?: number;
}

export class HistoriaLaboralView {
    agentesQuimicos?: string = '';
    empresa?: string = '';
    idHistoriaLaboral?: number;
    periodo?: number;
    puesto?: string = '';
}

export class EsquemaVacunacionView {
    activo?: boolean;
    catalogoVacunaView: CatalogoVacunaView;
    dosis: string = '';
    edad?: string = '';
    fechaCreacion?: Date | string | number;
    fechaEvaluacion?: Date | string | number;
    idEsquemaVacunacion?: number;
    idPaciente: string;
}

export class CatalogoVacunaView {
    activo?: boolean;
    catalogoDosisVacunaView: CatalogoDosisVacunaView = new CatalogoDosisVacunaView();
    enfermedades: string;
    idCatalogoVacuna?: number;
    nombreVacuna: string;
}

export class CatalogoDosisVacunaView {
    activo?: boolean;
    dosis: string;
    idCatalogoDosisVacuna?: number;
}

export class ConsumoPacienteView {
    activo?: boolean;
    cantidad?: number;
    catalogoDrogasId?: number;
    consumeActualmente?: boolean;
    creadoPor?: string = '';
    descripcionCatalogoDrogas?: string = '';
    edadAbandono?: number;
    edadInicio?: number;
    fechaCreacion?: Date;
    frecuencia?: string = '';
    idConsumoPaciente?: number;
    idPaciente?: string = '';
    ultimaModificacion?: Date;
}

export class AparatosSistemasView {
    activo?: boolean;
    aparatoReproductivoView?: AparatoReproductivoView;
    cardiovascularView?: CardiovascularView;
    creadoPor?: string = '';
    fechaCreacion?: Date;
    idAparatosSistemas?: number;
    idPaciente?: string = '';
    musculoEsqueleticoView?: MusculoEsqueleticoView;
    pielAnexosView?: PielAnexosView;
    sistemaDigestivoView?: SistemaDigestivoView;
    sistemaEndocrinoView?: SistemaEndocrinoView;
    sistemaHemolinfaticoView?: SistemaHemolinfaticoView;
    sistemaNerviosoView?: SistemaNerviosoView;
    sistemaRespiratorioView?: SistemaRespiratorioView;
    sistemaUrinarioView?: SistemaUrinarioView;
    ultimaModificacion?: Date;
}

export class AparatoReproductivoView {
    comentarios?: string = '';
    desechosSecrecion?: boolean;
    dolor?: boolean;
    idAparatoReproductivo?: number;
    prurito?: boolean;
}

export class CardiovascularView {
    comentarios?: string = '';
    diaforesis?: boolean;
    dolorPrecordial?: boolean;
    edema?: boolean;
    idCardiovascular?: number;
    palpitaciones?: boolean;
    sincope?: boolean;
}

export class MusculoEsqueleticoView {
    alteracionesMovilidad?: boolean;
    comentarios?: string = '';
    deformidades?: boolean;
    dolor?: boolean;
    idMusculoEsqueletico?: number;
}

export class PielAnexosView {
    alteracionColorPiel?: boolean;
    comentarios?: string = '';
    idPielAnexos?: number;
    lesionesCutaneas?: boolean;
}

export class SistemaDigestivoView {
    cambioHabitoIntestinal?: boolean;
    comentarios?: string = '';
    dolor?: boolean;
    idSistemaDigestivo?: number;
    nauseas?: boolean;
    pirosis?: boolean;
    sangradoTuboDigestivo?: boolean;
    vomito?: boolean;
}

export class SistemaEndocrinoView {
    comentarios?: string = '';
    gananciaPeso?: boolean;
    idSistemaEndocrino?: number;
    perdidaPeso?: boolean;
    polidipsia?: boolean;
    polifagia?: boolean;
}

export class SistemaHemolinfaticoView {
    comentarios?: string = '';
    fatiga?: boolean;
    idSistemaHemolinfatico?: number;
    nodulos?: boolean;
    petequiasEquimosis?: boolean;
}

export class SistemaNerviosoExpView {
    comentarios?: string = '';
    fuerzaMuscularView?: FuerzaMuscularView;
    idSistemaNerviosoExp?: number;
    marcha?: string = '';
    orientacionEspacio?: boolean;
    orientacionPersona?: boolean;
    orientacionTiempo?: boolean;
    reflejosOsteotendinososView?: ReflejosOsteotendinososView;
    tonoMuscularView?: TonoMuscularView;
}

export class SistemaNerviosoView {
    alteracionesSentidos?: boolean;
    cefalea?: boolean;
    comentarios?: string = '';
    idSistemaNervioso?: number;
    mareo?: boolean;
    perdidaConciencia?: boolean;
    transtornosSuenio?: boolean;
}

export class SistemaUrinarioView {
    comentarios?: string = '';
    disuria?: boolean;
    hematuria?: boolean;
    idSistemaUrinario?: number;
    incontinencia?: boolean;
    nicturia?: boolean;
    poliuria?: boolean;
}

export class SistemaRespiratorioView {
    comentarios?: string = '';
    dificultadRespiratoria?: boolean;
    expectoracion?: boolean;
    idSistemaRespiratorio?: number;
    tos?: boolean;
}

export class FuerzaMuscularView {
    brazoDerecho?: string = '';
    brazoIzquierdo?: string = '';
    idFuerzaMuscular?: number;
    piernaDerecha?: string = '';
    piernaIzquierda?: string = '';
}

export class ReflejosOsteotendinososView {
    brazoDerecho?: boolean;
    brazoDerechoComentarios?: string = '';
    brazoIzquierdo?: boolean;
    brazoIzquierdoComentarios?: string = '';
    idReflejosOsteotendinosos?: number;
    piernaDerecha?: boolean;
    piernaDerechaComentarios?: string = '';
    piernaIzquierda?: boolean;
    piernaIzquierdaComentarios?: string = '';
}

export class TonoMuscularView {
    descripcionHipertonia?: string = '';
    descripcionHipotonia?: string = '';
    descripcionNormal?: string = '';
    hipertonia?: boolean;
    hipotonia?: boolean;
    idTonoMuscular?: number;
    normal?: boolean;
}

export class ExploracionFisicaView {
    activo?: boolean;
    creadoPor?: string = '';
    estadoConcienciaView?: EstadoConcienciaView;
    exploracionAbdomenView?: ExploracionAbdomenView;
    exploracionCabezaView?: ExploracionCabezaView;
    exploracionCuelloView?: ExploracionCuelloView;
    exploracionExtremidadesView?: ExploracionExtremidadesView;
    exploracionGenitalesView?: ExploracionGenitalesView;
    exploracionPielView?: ExploracionPielView;
    exploracionToraxView?: ExploracionToraxView;
    fechaCreacion?: Date;
    frecuenciaCardiaca?: number;
    frecuenciaRespiratoria?: number;
    habitusExteriorView?: HabitusExteriorView;
    idExploracionFisica?: number;
    idPaciente?: string = '';
    imc?: number;
    peso?: number;
    sistemaNerviosoExpView?: SistemaNerviosoExpView;
    talla?: number;
    temperatura?: number;
    tensionArterialLevel1?: number;
    tensionArterialLevel2?: number;
    ultimaModificacion?: Date;
}

export class EstadoConcienciaView {
    comentarios: string = '';
    conciente: boolean;
    idEstadoConciencia?: number;
}


export class ExploracionCabezaView {
    cavidadOral?: string = '';
    comentarios?: string = '';
    conjuntiva?: string = '';
    dentadura?: string = '';
    idExploracionCabeza?: number;
    narinas?: string = '';
    normocefalo?: boolean;
    oidos?: string = '';
    orofaringe?: string = '';
    pupilasCategoria?: string = '';
    pupilasSubcategoria?: string = '';
}

export class ExploracionAbdomenView {
    comentarios?: string = '';
    dolor?: boolean;
    forma?: string = '';
    idExploracionAbdomen?: number;
    ruidos?: string = '';
    visceromegalias?: boolean;
}

export class ExploracionCuelloView {
    carotideoSimetrico?: boolean;
    comentarios?: string = '';
    idExploracionCuello?: number;
    masas?: boolean;
    movil?: boolean;
}

export class ExploracionExtremidadesView {
    amputaciones?: boolean;
    comentarios?: string = '';
    consistenciaEdema?: string = '';
    edema?: boolean;
    godetteEdema?: string = '';
    idExploracionExtremidades?: number;
    localizacionEdema?: string = '';
    malformaciones?: boolean;
    normal?: boolean;
    pulsos?: boolean;
    pulsosIntensidad?: boolean;
    pulsosSimetricos?: boolean;
    simetricas?: boolean;
}

export class ExploracionGenitalesView {
    comentarios?: string = '';
    idExploracionGenitales?: number;
    lesiones?: boolean;
    masas?: boolean;
    secreciones?: boolean;
}

export class ExploracionPielView {
    comentarios?: string = '';
    idExploracionPiel?: number;
    lesiones?: boolean;
    manchas?: boolean;
    masas?: boolean;
}

export class ExploracionToraxView {
    cardiacos?: string = '';
    comentarios?: string = '';
    idExploracionTorax?: number;
    mamas?: string = '';
    ruidosRespiratorios?: string = '';
    torax?: string = '';
}

export class HabitusExteriorView {
    comentarios?: string = '';
    ectomorfico?: boolean;
    endomorfico?: boolean;
    idHabitusExterior?: number;
    mesomorfico?: boolean;
}

export class PageAparatosSistemasView {
    content: Array<AparatosSistemasView>;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    sort: any;
    totalElements: number;
    totalPages: number;
}

export class ClinicCourseView extends PadecimientoView {
    consultaViewList: ConsultaView[];
    expand: boolean = false;
    loadingConsulta: boolean = true;
}

export class DatosClinicosView {
    idDatosClinicos: number;
    idPaciente: string = '';
    creadoPor: string = '';
    fechaCreacion: Date;
    activo: boolean;
    alergias: string = '';
    discapacidad: string = '';
    factorRh: string = '';
    grupoSanguineo: string = '';
    institucionSalud: string = '';
    nsss: string = '';
    ultimaModificacion: Date;
}

export class CatVacunaView {
    nombre: string = '';
    enfermedad: string = '';
    dosis: VacunaDosisView[] = [];
}

export class VacunaDosisView {
    ordinal: string = '';
    edad: string = '';
}

export class VacunaView {
    nombre: string = 'Vacuna';
    enfermedad: string = '';
    dosis: VacunaDosisView = new VacunaDosisView();
    fecha: Date | number | string = null;
    notas ='';
}
