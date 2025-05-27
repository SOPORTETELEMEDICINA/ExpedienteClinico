// src/app/core/services/consulta.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ConsultaView } from '../core/models/shared/consulta.model';
import { PageImpl } from '../core/models/shared/page.models';
import { NiomedicPageRequest } from '../core/models/shared/niomedicRequest.model';

@Injectable({ providedIn: 'root' })
export class ConsultaService {
  private readonly baseUrl = `${environment.api_url}/consulta`;

  constructor(private http: HttpClient) {}


  getConsultas(request: NiomedicPageRequest): Observable<PageImpl<ConsultaView>> {
    const params = new HttpParams({ fromObject: this.serializeRequest(request) });
    return this.http.get<PageImpl<ConsultaView>>(`${this.baseUrl}/page`, { params });
  }

  private serializeRequest(request: NiomedicPageRequest): any {
    const serialized: any = {};
    Object.entries(request).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        serialized[key] = value;
      }
    });
    return serialized;
  }



  getConsultaById(idConsulta: number): Observable<ConsultaView> {
    return this.http.get<ConsultaView>(`${this.baseUrl}/${idConsulta}`).pipe(
      catchError(err => {
        console.error('Error al obtener consulta', err);
        return throwError(() => err);
      })
    );
  }

  getUltimaConsulta(idPaciente: string, idGroup: number): Observable<ConsultaView> {
    return this.http.get<ConsultaView>(`${this.baseUrl}/ultima/${idPaciente}?idGroup=${idGroup}`).pipe(
      catchError(err => throwError(() => err))
    );
  }

  getConsultasPaginadas(request: NiomedicPageRequest): Observable<PageImpl<ConsultaView>> {
    let params = new HttpParams()
      .set('page', request.page?.toString() || '0')
      .set('size', request.size?.toString() || '10')
      .set('orderColumn', request.orderColumn || 'fechaConsulta')
      .set('orderType', request.orderType || 'desc');

    if (request.name) {
      params = params.set('name', request.name);
    }

    return this.http.get<PageImpl<ConsultaView>>(`${this.baseUrl}/page`, { params }).pipe(
      catchError(err => throwError(() => err))
    );
  }

  getConsultasBusqueda(request: NiomedicPageRequest): Observable<PageImpl<ConsultaView>> {
    return this.http.post<PageImpl<ConsultaView>>(`${this.baseUrl}/search`, request).pipe(
      catchError(err => throwError(() => err))
    );
  }

  finalizarConsulta(idConsulta: number, consulta: ConsultaView): Observable<any> {
    return this.http.put(`${this.baseUrl}/terminar/${idConsulta}`, consulta).pipe(
      catchError(err => throwError(() => err))
    );
  }

  iniciarConsulta(idConsulta: number, estado: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/iniciar/${idConsulta}`, estado).pipe(
      catchError(err => throwError(() => err))
    );
  }

  cancelarConsulta(idConsulta: number, estado: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/cancelar/${idConsulta}`, estado).pipe(
      catchError(err => throwError(() => err))
    );
  }

  confirmarConsulta(idConsulta: number, estado: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/confirmar/${idConsulta}`, estado).pipe(
      catchError(err => throwError(() => err))
    );
  }
}
