import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cie10, Cie9 } from '../models/shared/cies.model';

@Injectable({ providedIn: 'root' })
export class CiesService {
  constructor(private http: HttpClient) {}

  buscarDiagnosticosCIE10(termino: string, sexo: string, edad: number): Observable<Cie10[]> {
    const params = new HttpParams()
      .set('sexo', sexo === 'M' ? 'HOMBRE' : 'MUJER')
      .set('edad', edad.toString())
      .set('page', '0')
      .set('size', '50')
      .set('orderType', 'desc')
      .set('orderColumn', 'nombre')
      .set('datosBusqueda', termino);

    return this.http.get<any>(`${environment.api_url}/cat-cie10/search`, { params })
  .pipe(map(res => res.content as Cie10[]));

  }

  buscarTratamientosCIE9(termino: string, sexo: string, edad: number): Observable<Cie9[]> {
    const params = new HttpParams()
      .set('sexo', sexo === 'M' ? 'HOMBRE' : 'MUJER')
      .set('edad', edad.toString())
      .set('page', '0')
      .set('size', '50')
      .set('orderType', 'desc')
      .set('orderColumn', 'proNombre')
      .set('datosBusqueda', termino);

//    return this.http.get<Cie9[]>(`${environment.api_url}/cat-cie9/search`, { params });
    return this.http.get<any>(`${environment.api_url}/cat-cie9/search`, { params })
    .pipe(map(res => res.content as Cie9[]));

  }
}
