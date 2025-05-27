import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CatalogosService {
  private baseUrl = environment.api_url;

  constructor(private http: HttpClient) {}

  getCatalogoFormacion(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/catalogo-formacion/findAll`);
  }

  getDiscapacidadesPage(): Observable<{ content: any[] }> {
    return this.http.get<{ content: any[] }>(`${this.baseUrl}/catalogo-discapacidades/search`);
  }

  getInstituPage(): Observable<{ content: any[] }> {
    return this.http.get<{ content: any[] }>(`${this.baseUrl}/catalogo-Instituciones/search`);
  }

  getParentesco(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/catalogo-parentesco/findAll`);
  }

  getCatConvivencia(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/catalogo-convivencia/findAll`);
  }

  getCatalogoReligiones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/catalogo-religion/findAll`);
  }

  getCatalogoNacionalidades(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/catalogo-nacionalidades/findAll`);
  }

  getCatalogoSexo(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/catalogo-sexo/findAll`);
  }

  getCatalogoEstadoCivil(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/catalogo-estado-civil/findAll`);
  }

  getCatalogoTipoSangre(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/catalogo-tipo-sangre/findAll`);
  }

  getCatalogoInstitucionesSalud(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/catalogo-instituciones-salud/findAll`);
  }

  getCatalogoEscolaridades(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/catalogo-escolaridad/findAll`);
  }

  getCatalogoLenguasIndigenas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/catalogo-lenguas-indigenas/findAll`);
  }

  getCatalogoOcupaciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/catalogo-ocupacion/findAll`);
  }

  getCatalogoEtnia(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/catalogo-etnia/findAll`);
  }
}
