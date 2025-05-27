import {HttpClient} from "@angular/common/http";

import {config} from '../../shared/smartadmin.config';
import { Observable, catchError, delay, map,throwError  } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // 🔥 Esto hace que esté disponible globalmente
})

export class JsonApiService {

  constructor(private http: HttpClient) {}

  public fetch(url: string): Observable<any> {
    return this.http.get(this.getBaseUrl() + config.API_URL + url).pipe(
      delay(100), // Retrasa la respuesta 100ms
      map((data: any) => data.data || data), // Mapear datos
      catchError(this.handleError) // Manejo de errores
    );
  }

  private getBaseUrl(){
    return location.protocol + '//' + location.hostname + (location.port ? ':'+location.port : '') + '/'
  }



  private handleError(error: any) {
    // En una aplicación real, aquí puedes registrar el error en un servidor
    let errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';
  
    console.error(errMsg); // Log en la consola
  
    return throwError(() => new Error(errMsg)); // ✅ Nueva forma de manejar errores en RxJS 7+
  }

}


