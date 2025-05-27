import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EstadosView {
  key: string;
  nombre: string;
}

export interface PaisesView {
  id: string;
  nombre: string;
}

export interface MunicipiosView {
  key: string;
  nombre: string;
  efe_key: string;
}

export interface LocalidadesView {
  key: string;
  nombre: string;
  efe_key: string;
  mun_key: string;
}

export interface CodigosPostalesView {
  key: string;
  asenta: string;
  tasenta: string;
  efe_key: string;
  mun_key: string;
  cd_key: string;
}

@Injectable({
  providedIn: 'root'
})
export class ComunService {

  constructor(private http: HttpClient) {}

  getCatConvivencia() {
    return [
      { nombre: 'Social' },
      { nombre: '1-3 veces por semana' },
      { nombre: 'Más de 3 veces por semana' },
      { nombre: 'Diariamente' }
    ];
  }

  getTipoSangre() {
    return [
      { id: 4, nombre: 'O+' },
      { id: 8, nombre: 'O-' },
      { id: 1, nombre: 'A+' },
      { id: 5, nombre: 'A-' },
      { id: 2, nombre: 'B+' },
      { id: 6, nombre: 'B-' },
      { id: 3, nombre: 'AB+' },
      { id: 7, nombre: 'AB-' },
      { id: 9, nombre: 'Desconoce tipo de sangre' }
    ];
  }

  getFactorRH() {
    return [
      { id: 1, nombre: 'Positivo' },
      { id: 2, nombre: 'Negativo' }
    ];
  }

  getEstadoCivil() {
    return [
      { id: 1, nombre: 'CASADO(A)' },
      { id: 2, nombre: 'DIVORCIADO(A)' },
      { id: 3, nombre: 'SOLTERO(A)' },
      { id: 4, nombre: 'UNION LIBRE(A)' },
      { id: 5, nombre: 'VIUDO(A)' }
    ];
  }

  getParentesco() {
    return [
      {"id": "1", "nombre": "ABUELO(A)"},
      {"id": "2", "nombre": "PADRE"},
      {"id": "3", "nombre": "MADRE"},
      {"id": "4", "nombre": "HERMANO(A)"},
      {"id": "5", "nombre": "TIO(A)"},
      {"id": "6", "nombre": "PRIMO(A)"},
      {"id": "7", "nombre": "SOBRINO(A)"},
      {"id": "8", "nombre": "HIJO(A)"},
      {"id": "9", "nombre": "PAREJA"},
      {"id": "10", "nombre": "AMIGO(A)"},
      {"id": "11", "nombre": "VECINO(A)"}
    ]
  }

  getLocalidades(): Observable<LocalidadesView[]> {
    return this.http.get<LocalidadesView[]>('/assets/api/localidades.json');
  }

  getEscolaridad(): Observable<any[]> {
    return this.http.get<any[]>('/assets/api/escolaridad.json');
  }

  getOcupaciones(): Observable<any[]> {
    return this.http.get<any[]>('/assets/api/ocupacion.json');
  }

  getAlergias(): Observable<any[]> {
    return this.http.get<any[]>('/assets/api/alergias.json');
  }

  getDiscapacidades(): Observable<any[]> {
    return this.http.get<any[]>('/assets/api/discapacidades.json');
  }

  getInstitucionesMedicas(): Observable<any[]> {
    return this.http.get<any[]>('/assets/api/insmedica.json');
  }

  

  getCodigosPostales(): Observable<CodigosPostalesView[]> {
    return this.http.get<CodigosPostalesView[]>('/assets/api/codigospostales.json');
  }

  getEtnia(): Observable<any[]> {
    return this.http.get<any[]>('/assets/api/grupo-etnico.json');
  }

  getLenguaIndigena(): Observable<any[]> {
    return this.http.get<any[]>('/assets/api/lengua-indigena.json');
  }

  getCatEspecialidades(): Observable<any[]> {
    return this.http.get<any[]>('/assets/api/especialidades.json');
  }

  getNacionalidades(): Observable<any[]> {
    return this.http.get<any[]>('/assets/api/nacionalidad.json');
  }

  getCatCodigosPostalesUnicos(): Observable<any[]> {
    return this.http.get<any[]>('/assets/api/codigos-postales-unicos.json');
  }
}
