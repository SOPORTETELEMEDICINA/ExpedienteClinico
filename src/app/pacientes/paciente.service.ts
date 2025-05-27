import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { from, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  PatientView,
  PatientPageView,
  PatientCanalizadoPageView,
  DatosClinicosView,
  HeredoFamiliarView,
  PersonalPatologicoView,
  PersonalNoPatologicoView,
  ExploracionFisicaView,
  AparatosSistemasView,
  EsquemaVacunacionView,
  ConsumoPacienteView,
  ClinicCourseView,
  TitularGet,
  TutorGet,
  BeneficiarioGet

} from '../core/models/pacientes/paciente.model';

import {  IndicacionesGlu,
  IndicacioesPA,
  IndicacionesPeso,
  InicacionesCovid,
  NivelesCovid,
  NivelesGlu,
  NivelesPA,
  NivelesPeso} from '../core/models/shared/common.model';
import { PageImpl, PageRequest, PageRequestAtendidos, PageRequestCanalizado,  } from '../core/models/shared/page.models';
import {NiomedicPageRequest } from '../core/models/shared/niomedicRequest.model';
import {ConsultaView } from '../core/models/shared/consulta.model';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private pacienteSeleccionado: PatientView | null = null;
  private baseUrl = `${environment.api_url}/pacientes`;

  constructor(private http: HttpClient) {}


// CONFIGURACION DE PACIENTE INICIAL

setPacienteSeleccionado(paciente: PatientView): void {
  this.pacienteSeleccionado = paciente;
}

getPacienteSeleccionado(): PatientView | null {
  return this.pacienteSeleccionado;
}

  // -------------------- BÁSICOS --------------------

  getPage(request: PageRequest): Observable<PageImpl<PatientPageView>> {
    let params = new HttpParams()
      .set('page', request.page.toString())
      .set('size', request.size.toString())
      .set('orderColumn', request.orderColumn)
      .set('orderType', request.orderType);

    if (request.selectGroup !== undefined) {
      params = params.set('selectGroup', request.selectGroup.toString());
    }

    if (request.name) {
      params = params.set('datosBusqueda', request.name);
      params = params.set('name', request.name);
    }

    return this.http.get<PageImpl<PatientPageView>>(`${this.baseUrl}/page`, { params });
  }

  getPageAtendidos(request: PageRequestAtendidos): Observable<PageImpl<PatientPageView>> {
    let params = new HttpParams()
      .set('page', request.page.toString())
      .set('size', request.size.toString())
      .set('orderColumn', request.orderColumn)
      .set('orderType', request.orderType);

    if (request.selectGroup !== undefined) {
      params = params.set('selectGroup', request.selectGroup.toString());
    }

    if (request.name) {
      params = params.set('datosBusqueda', request.name);
      params = params.set('name', request.name);
    }

    return this.http.get<PageImpl<PatientPageView>>(`${this.baseUrl}/page/atendidos`, { params });
  }

  getPageCanalizado(request: PageRequestCanalizado): Observable<PageImpl<PatientCanalizadoPageView>> {
    let params = new HttpParams()
      .set('page', request.page.toString())
      .set('size', request.size.toString())
      .set('orderColumn', request.orderColumn)
      .set('orderType', request.orderType);

    if (request.selectGroup !== undefined) {
      params = params.set('selectGroup', request.selectGroup.toString());
    }

    if (request.name) {
      params = params.set('datosBusqueda', request.name);
      params = params.set('name', request.name);
    }

    return this.http.get<PageImpl<PatientCanalizadoPageView>>(`${this.baseUrl}/page/canalizado`, { params });
  }

  getPacienteById(id: string): Observable<PatientView> {
    return this.http.get<PatientView>(`${this.baseUrl}/${id}`);
  }

  guardarPaciente(paciente: PatientView): Observable<PatientView> {
    return this.http.post<PatientView>(`${this.baseUrl}/guardar`, paciente);
  }

  eliminarPaciente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

   // -------------------- CUESTIONARIOS --------------------
   getCatPreguntas(): Observable<any> {
    return this.http.get(`${environment.api_url}/cat_preguntas/find`);
  }

  getCuestionariosPorPaciente(idPaciente: string): Observable<any> {
    return this.http.get(`${environment.api_url}/cat_cuestionario/find?idPaciente=${idPaciente}`);
  }

  getPreguntasPorCuestionario(idCuestionario: number): Observable<any> {
    return this.http.get(`${environment.api_url}/cat_preguntas/find?idCuestionario=${idCuestionario}`);
  }

  getRespuestasPorCuestionario(idCuestionario: number, idPaciente: string): Observable<any> {
    return this.http.get(`${environment.api_url}/cuestionario_respuesta/?idCuestionario=${idCuestionario}&idPaciente=${idPaciente}`);
  }

  guardarPregunta(pregunta: any): Observable<any> {
    return this.http.post(`${environment.api_url}/cat_preguntas`, pregunta);
  }

  actualizarPregunta(idPregunta: string, pregunta: any): Observable<any> {
    return this.http.put(`${environment.api_url}/cat_preguntas/${idPregunta}`, pregunta);
  }

  guardarRespuestaCuestionario(respuesta: any): Observable<any> {
    return this.http.post(`${environment.api_url}/cuestionario_respuesta`, respuesta);
  }

  
  

  // -------------------- DATOS CLÍNICOS --------------------

  getDatosClinicos(idPaciente: string): Observable<DatosClinicosView> {
    return this.http.get<DatosClinicosView>(`${environment.api_url}/datos-clinicos/${idPaciente}`);
  }

  guardarDatosClinicos(datos: DatosClinicosView): Observable<any> {
    return this.http.post(`${environment.api_url}/datos-clinicos`, datos);
  }

  actualizarDatosClinicos(idPaciente: string, datos: DatosClinicosView): Observable<any> {
    return this.http.put(`${environment.api_url}/datos-clinicos/${idPaciente}`, datos);
  }

  // -------------------- HEREDO FAMILIARES --------------------

  getHeredoFamiliares(idPaciente: string): Observable<HeredoFamiliarView> {
    return this.http.get<HeredoFamiliarView>(`${environment.api_url}/heredo-familiar/${idPaciente}`);
  }

  guardarHeredoFamiliar(datos: HeredoFamiliarView): Observable<any> {
    return this.http.post(`${environment.api_url}/heredo-familiar`, datos);
  }

  actualizarHeredoFamiliar(idPaciente: string, datos: HeredoFamiliarView): Observable<any> {
    return this.http.put(`${environment.api_url}/heredo-familiar/${idPaciente}`, datos);
  }

  // -------------------- PERSONAL PATOLÓGICO --------------------

  getPersonalPatologico(idPaciente: string): Observable<PersonalPatologicoView> {
    return this.http.get<PersonalPatologicoView>(`${environment.api_url}/personal-patologico/${idPaciente}`);
  }

  guardarPersonalPatologico(datos: PersonalPatologicoView): Observable<any> {
    return this.http.post(`${environment.api_url}/personal-patologico`, datos);
  }

  actualizarPersonalPatologico(idPaciente: string, datos: PersonalPatologicoView): Observable<any> {
    return this.http.put(`${environment.api_url}/personal-patologico/${idPaciente}`, datos);
  }
    // -------------------- PERSONAL NO PATOLÓGICO --------------------

  getPersonalNoPatologico(idPaciente: string): Observable<PersonalNoPatologicoView> {
    return this.http.get<PersonalNoPatologicoView>(`${environment.api_url}/personal-no-patologico/${idPaciente}`);
  }

  guardarPersonalNoPatologico(datos: PersonalNoPatologicoView): Observable<any> {
    return this.http.post(`${environment.api_url}/personal-no-patologico`, datos);
  }

  actualizarPersonalNoPatologico(idPaciente: string, datos: PersonalNoPatologicoView): Observable<any> {
    return this.http.put(`${environment.api_url}/personal-no-patologico/${idPaciente}`, datos);
  } 
  // -------------------- EXPLORACIÓN FÍSICA --------------------

  getExploracionFisica(idPaciente: string): Observable<ExploracionFisicaView> {
    return this.http.get<ExploracionFisicaView>(`${environment.api_url}/exploracion-fisica/${idPaciente}`);
  }

  guardarExploracionFisica(datos: ExploracionFisicaView): Observable<any> {
    return this.http.post(`${environment.api_url}/exploracion-fisica`, datos);
  }

  actualizarExploracionFisica(idPaciente: string, datos: ExploracionFisicaView): Observable<any> {
    return this.http.put(`${environment.api_url}/exploracion-fisica/${idPaciente}`, datos);
  }

  // -------------------- APARATOS Y SISTEMAS --------------------

  getAparatosSistemas(idPaciente: string): Observable<AparatosSistemasView> {
    return this.http.get<AparatosSistemasView>(`${environment.api_url}/aparatos-sistemas/${idPaciente}`);
  }

  guardarAparatosSistemas(datos: AparatosSistemasView): Observable<any> {
    return this.http.post(`${environment.api_url}/aparatos-sistemas`, datos);
  }

  actualizarAparatosSistemas(idPaciente: string, datos: AparatosSistemasView): Observable<any> {
    return this.http.put(`${environment.api_url}/aparatos-sistemas/${idPaciente}`, datos);
  }
  // -------------------- ESQUEMA VACUNACIÓN --------------------

  getEsquemaVacunacion(idPaciente: string): Observable<EsquemaVacunacionView[]> {
    return this.http.get<EsquemaVacunacionView[]>(`${environment.api_url}/esquema-vacunacion/page?name=${idPaciente}`);
  }

  guardarEsquemaVacunacion(datos: EsquemaVacunacionView): Observable<any> {
    return this.http.post(`${environment.api_url}/esquema-vacunacion`, datos);
  }

  actualizarEsquemaVacunacion(id: string, datos: EsquemaVacunacionView): Observable<any> {
    return this.http.put(`${environment.api_url}/esquema-vacunacion/${id}`, datos);
  }

  // -------------------- CONSUMO PACIENTE --------------------

  getConsumoPaciente(idPaciente: string): Observable<ConsumoPacienteView[]> {
    return this.http.get<ConsumoPacienteView[]>(`${environment.api_url}/consumo-paciente/page?name=${idPaciente}`);
  }

  guardarConsumoPaciente(datos: ConsumoPacienteView): Observable<any> {
    return this.http.post(`${environment.api_url}/consumo-paciente`, datos);
  }

  actualizarConsumoPaciente(idPaciente: string, datos: ConsumoPacienteView): Observable<any> {
    return this.http.put(`${environment.api_url}/consumo-paciente/${idPaciente}`, datos);
  }

  // -------------------- TUTORES Y TITULARES --------------------
  getTitularPorTelefono(telefono: string): Observable<TitularGet> {
    return this.http.get<TitularGet>(`${environment.api_url}/pacientes/titular-por-telefono/${telefono}`);
  }

  getTutores(idtutor: string): Observable<TutorGet> {
    return this.http.get<TutorGet>(`${environment.api_url}/relacion-tutores/find?idPaciente=${idtutor}`);
  }

  getBeneficiarios(idtutor: string): Observable<BeneficiarioGet[]> {
    return this.http.get<BeneficiarioGet[]>(`${environment.api_url}/relacion-titular/beneficiarios/${idtutor}`);
  }

  guardarRelacionTutores(data: any): Observable<any> {
    return this.http.post(`${environment.api_url}/relacion-tutores`, data);
  }

  guardarRelacionTitulares(data: any): Observable<any> {
    return this.http.post(`${environment.api_url}/relacion-titular`, data);
  }

  guardarTutor(data: any): Observable<any> {
    return this.http.post(`${environment.api_url}/Tutores`, data);
  }

  guardarRelacionTutor(data: any): Observable<any> {
    return this.http.post(`${environment.api_url}/relacion-tutores`, data);
  }
    // -------------------- TELEMETRÍA --------------------

// -------------------- TELEMETRÍA --------------------

// ======= GET INDICACIONES =======
getIndicacionesGlucosa(idPaciente: string): Observable<IndicacionesGlu> {
  return this.http.get<IndicacionesGlu>(`${environment.api_url}/SaludIndGluc/${idPaciente}`);
}

getIndicacionesPA(idPaciente: string): Observable<IndicacioesPA> {
  return this.http.get<IndicacioesPA>(`${environment.api_url}/SaludIndPa/${idPaciente}`);
}

getIndicacionesPeso(idPaciente: string): Observable<IndicacionesPeso> {
  return this.http.get<IndicacionesPeso>(`${environment.api_url}/SaludIndNutri/${idPaciente}`);
}

getIndicacionesCovid(idPaciente: string): Observable<InicacionesCovid> {
  return this.http.get<InicacionesCovid>(`${environment.api_url}/SaludIndCovid/${idPaciente}`);
}

// ======= POST INDICACIONES =======
postIndicacionesGlucosa(data: any): Observable<any> {
  return this.http.post(`${environment.api_url}/SaludIndGluc`, data);
}

postIndicacionesPA(data: any): Observable<any> {
  return this.http.post(`${environment.api_url}/SaludIndPa`, data);
}

postIndicacionesPeso(data: any): Observable<any> {
  return this.http.post(`${environment.api_url}/SaludIndNutri`, data);
}

postIndicacionesCovid(data: any): Observable<any> {
  return this.http.post(`${environment.api_url}/SaludIndCovid`, data);
}


// ======= PUT INDICACIONES =======
putIndicacionesGlucosa(idPaciente: string, data: any): Observable<any> {
  return this.http.put(`${environment.api_url}/SaludIndGluc/${idPaciente}`, data);
}

putIndicacionesPA(idPaciente: string, data: any): Observable<any> {
  return this.http.put(`${environment.api_url}/SaludIndPa/${idPaciente}`, data);
}

putIndicacionesPeso(idPaciente: string, data: any): Observable<any> {
  return this.http.put(`${environment.api_url}/SaludIndNutri/${idPaciente}`, data);
}

putIndicacionesCovid(idPaciente: string, data: any): Observable<any> {
  return this.http.put(`${environment.api_url}/SaludIndCovid/${idPaciente}`, data);
}

// ======= GET NIVELES (general) =======
getNivelesGlucosa(idPaciente: string): Observable<NivelesGlu[]> {
  return this.http.get<NivelesGlu[]>(`${environment.api_url}/SaludNivGluc/search?pacidfk=${idPaciente}`);
}

getNivelesPA(idPaciente: string): Observable<NivelesPA[]> {
  return this.http.get<NivelesPA[]>(`${environment.api_url}/SaludNivPreart/search?pacidfk=${idPaciente}`);
}

getNivelesPeso(idPaciente: string): Observable<NivelesPeso[]> {
  return this.http.get<NivelesPeso[]>(`${environment.api_url}/SaludNivPeso/search?pacidfk=${idPaciente}`);
}

getNivelesCovid(idPaciente: string): Observable<NivelesCovid[]> {
  return this.http.get<NivelesCovid[]>(`${environment.api_url}/SaludNivCovid/search?pacidfk=${idPaciente}`);
}

// ======= GET NIVELES (por fechas) =======
getNivelesGlucosaFechas(idPaciente: string, idPeriodo: string, fechaInicio: string, fechaFin: string): Observable<NivelesGlu[]> {
  return this.http.get<NivelesGlu[]>(`${environment.api_url}/SaludNivGluc/busqueda?pacidfk=${idPaciente}&periodo=${idPeriodo}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
}

getNivelesPAFechas(idPaciente: string, idPeriodo: string, fechaInicio: string, fechaFin: string): Observable<NivelesPA[]> {
  return this.http.get<NivelesPA[]>(`${environment.api_url}/SaludNivPreart/busqueda?pacidfk=${idPaciente}&periodo=${idPeriodo}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
}

getNivelesPesoFechas(idPaciente: string, idPeriodo: string, fechaInicio: string, fechaFin: string): Observable<NivelesPeso[]> {
  return this.http.get<NivelesPeso[]>(`${environment.api_url}/SaludNivPeso/busqueda?pacidfk=${idPaciente}&periodo=${idPeriodo}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
}

getNivelesCovidFechas(idPaciente: string, idPeriodo: string, fechaInicio: string, fechaFin: string): Observable<NivelesCovid[]> {
  return this.http.get<NivelesCovid[]>(`${environment.api_url}/SaludNivCovid/busqueda?pacidfk=${idPaciente}&periodo=${idPeriodo}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
}

// ======= POST NIVELES =======
guardarNivelesGlucosa(niv: NivelesGlu): Observable<any> {
  return this.http.post(`${environment.api_url}/SaludNivGluc`, niv);
}

guardarNivelesPA(niv: NivelesPA): Observable<any> {
  return this.http.post(`${environment.api_url}/SaludNivPreart`, niv);
}

guardarNivelesPeso(niv: NivelesPeso): Observable<any> {
  return this.http.post(`${environment.api_url}/SaludNivPeso`, niv);
}

guardarNivelesCovid(niv: NivelesCovid): Observable<any> {
  return this.http.post(`${environment.api_url}/SaludNivCovid`, niv);
}



// -------------------- CURSO CLÍNICO --------------------

getCursoClinico(request: NiomedicPageRequest): Observable<PageImpl<ClinicCourseView>> {
  if (!request.idPaciente) {
    console.error("idPaciente es requerido para obtener el curso clínico.");
    return throwError(() => new Error("idPaciente es requerido"));
  }

  let params = new HttpParams()
    .set('idPaciente', request.idPaciente)
    .set('page', request.page.toString())
    .set('size', request.size.toString())
    .set('orderColumn', request.orderColumn || 'fechaCreacion')
    .set('orderType', request.orderType || 'desc');

  return this.http.get<PageImpl<ClinicCourseView>>(
    `${environment.api_url}/cursoclinico/search`,
    { params }
  );
}

getListaConsultasCursoClinico(request: NiomedicPageRequest): Observable<PageImpl<ConsultaView>> {
  if (!request.idPaciente || !request.idPadecimiento) {
    console.error("idPaciente e idPadecimiento son requeridos para obtener las consultas.");
    return throwError(() => new Error("idPaciente e idPadecimiento son requeridos"));
  }

  let params = new HttpParams()
    .set('idPaciente', request.idPaciente)
    .set('idPadecimiento', request.idPadecimiento)
    // .set('page', request.page.toString())
    // .set('size', request.size.toString())
    // .set('orderColumn', request.orderColumn || 'fechaCreacion')
    // .set('orderType', request.orderType || 'desc');

  return this.http.get<PageImpl<ConsultaView>>(
    `${environment.api_url}/cursoclinico/lista-consultas`,
    { params }
  );
}

actualizarEstatusCursoClinico(idPadecimiento: string): Observable<boolean> {
  if (!idPadecimiento) {
    console.error("idPadecimiento es requerido para actualizar el estatus.");
    return throwError(() => new Error("idPadecimiento es requerido"));
  }

  return this.http.put(`${environment.api_url}/cursoclinico/actualizar-estatus?idPadecimiento=${idPadecimiento}`, {})
    .pipe(map(() => true));
}




// -------------------- NOTIFICACIONES --------------------

postNotification(noti: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + environment.OSTOKENAPI
  });

  return this.http.post('https://onesignal.com/api/v1/notifications', noti, { headers });
}

postCANCELNotification(idNotification: string): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + environment.OSTOKENAPI
  });

  const url = `https://onesignal.com/api/v1/notifications/${idNotification}?app_id=${environment.OSAPPID}`;
  return this.http.delete(url, { headers });
}
postNotiPacientes(value: any): Observable<any> {
  const url = `${environment.api_url}/notificaciones-paciente`;
  return this.http.post(url, value);
}
dellNotipac(idUserApp: string, idDevice: string, tipoNoti: number): Observable<any> {
  const url = `${environment.api_url}/notificaciones-paciente?idUserApp=${idUserApp}&idDevice=${idDevice}&tipoNotificacion=${tipoNoti}`;
  return this.http.delete(url);
}
getNotipac(idUserApp: string, idDevice: string, tipoNoti: number): Observable<any> {
  const url = `${environment.api_url}/notificaciones-paciente/one?idUserApp=${idUserApp}&idDevice=${idDevice}&tipoNotificacion=${tipoNoti}`;
  return this.http.get(url);
}

DELETEALL(): Observable<any> {
  const url = `${environment.api_url}/notificaciones-paciente/deleteAll`;
  return this.http.delete(url);
}

GETALL(): Observable<any> {
  const url = `${environment.api_url}/notificaciones-paciente`;
  return this.http.get(url);
}

  // -------------------- HISTORIA CLÍNICA GLOBAL --------------------
  getHistoriaClinica(idPaciente: string): Observable<any> {
    return this.http.get(`${environment.api_url}/historia-clinica/${idPaciente}`);
  }

  guardarHistoriaClinica(data: any): Observable<any> {
    return this.http.post(`${environment.api_url}/historia-clinica`, data);
  }

  actualizarHistoriaClinica(idPaciente: string, data: any): Observable<any> {
    return this.http.put(`${environment.api_url}/historia-clinica/${idPaciente}`, data);
  }

  // -------------------- CATÁLOGO DE VACUNAS --------------------
  getCatVacunas(): Observable<any> {
    return this.http.get('/assets/api/catVacunas.json');
  }
}
