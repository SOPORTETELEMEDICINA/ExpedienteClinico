import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageImpl, PageRequest } from 'src/app/core/models/shared/page.models';
import { MedicoView } from 'src/app/core/models/medicos/medico.model';
import { UserAppView } from 'src/app/core/models/shared/user-app.model';

@Injectable({
  providedIn: 'root',
})
export class MedicosService {
  private baseUrl = `${environment.api_url}/medicos`;

  constructor(private http: HttpClient) {}

  getMedicosPaginated(request: PageRequest): Observable<PageImpl<MedicoView>> {
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

    return this.http.get<PageImpl<MedicoView>>(`${this.baseUrl}/page`, { params });
  }

  guardarMedicoYUsuario(payload: { medicoView: MedicoView; userAppView: UserAppView }): Observable<any> {
    return this.http.post(`${this.baseUrl}/medico-usuario`, payload);
  }

  getMedicoById(idMedico: string): Observable<MedicoView> {
    return this.http.get<MedicoView>(`${this.baseUrl}/${idMedico}`);
  }

  getMedicoPorIdUsuario(idUsuario: number): Observable<MedicoView> {
    return this.http.get<MedicoView>(`${this.baseUrl}/obtenerPorIdUsuario/${idUsuario}`);
  }

  getMedicoPorNombreUsuario(userName: string): Observable<MedicoView> {
    return this.http.get<MedicoView>(`${this.baseUrl}/obtenerPorNombreUsuario/${userName}`);
  }

  saveCedula(idMedico: string, form: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/subirCedula/${idMedico}`, form);
  }

  saveTitulo(idMedico: string, form: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/subirDiploma/${idMedico}`, form);
  }

  saveDomicilio(idMedico: string, domicilio: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/${idMedico}/domicilio`, domicilio);
  }

  updateDomicilio(idMedico: string, domicilio: any[]): Observable<any> {
    return this.http.put(`${this.baseUrl}/${idMedico}/domicilio`, domicilio);
  }

  deleteDomicilio(idMedico: string, domicilio: any[]): Observable<any> {
    return this.http.request('delete', `${this.baseUrl}/${idMedico}/domicilio`, { body: domicilio });
  }

  saveEspecialidades(idMedico: string, especialidades: any[], isEditing: boolean): Observable<any> {
    const method = isEditing ? 'put' : 'post';
    return this.http[method](`${this.baseUrl}/${idMedico}/especialidad`, especialidades);
  }

  deleteEspecialidad(idMedico: string, especialidades: any[]): Observable<any> {
    return this.http.request('delete', `${this.baseUrl}/${idMedico}/especialidad`, { body: especialidades });
  }

  getAgendaMedico(idMedico: string): Observable<any> {
    return this.http.get(`${environment.api_url}/Agendamedicos/search?idmedico=${idMedico}`);
  }

  saveAgendaMedico(data: any): Observable<any> {
    return this.http.post(`${environment.api_url}/Agendamedicos`, data);
  }

  saveDescripcionPuesto(data: any, isEditing: boolean, idDescPuesto?: number): Observable<any> {
    if (isEditing && idDescPuesto != null) {
      return this.http.put(`${environment.api_url}/descripcionPuesto/${idDescPuesto}`, data);
    }
    return this.http.post(`${environment.api_url}/descripcionPuesto`, data);
  }
}
