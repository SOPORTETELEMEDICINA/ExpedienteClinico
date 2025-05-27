import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Login,TokenManager } from 'src/app/authentication/authenticationClasses';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private LOG_OUT_URL: string = `${environment.api_url}/users/secure/logout`;
  private _token: TokenManager | null = null;
  public _refreshing: Subject<TokenManager> = new Subject<TokenManager>();
  public _isTokenRefreshing = false;

 
   constructor(private router: Router, private http: HttpClient) {
    this._token = JSON.parse(localStorage.getItem('auth_token') || 'null');
    if (!this._token) {
      console.warn(`Token from local storage was null`);
      this.loadToken(null);
      this.router.navigate(['login']);

    }
  }

 /** ✅ Verifica si el token es válido */
 isTokenValid(): boolean {
  return !!this._token && this._token.expires_in > new Date().getTime();
}

/** ✅ Obtiene el token actual */
get token(): TokenManager | null {
  return this._token;
}

/** ✅ Carga y almacena el token en LocalStorage */
loadToken(value: TokenManager | null): TokenManager | null {
  this._token = value;
  if (value === null) {
    localStorage.clear();
  } else {
    this._token.expires_in = new Date().getTime() + ((this._token.expires_in - 1) * 1000);
    localStorage.setItem('auth_token', JSON.stringify(this._token));

    if (this._token.id_grupo_principal && this._token.nombre_grupo_principal) {
      localStorage.setItem("group_name_selected", this._token.nombre_grupo_principal);
      localStorage.setItem("id_select_group", `${this._token.id_grupo_principal}`);
      localStorage.setItem("image_group_selected", this._token.imagen_grupo_principal);
    }

    localStorage.setItem('idprincipalrol', `${this._token.idTipoUsuario}`);
  }

  return this._token;
}

/** ✅ Inicia sesión */
login(login: Login): Observable<TokenManager> {
  const body = new HttpParams()
    .set('grant_type', 'password')
    .set('client_id', environment.client_id)
    .set('client_secret', environment.client_secret)
    .set('username', login.username)
    .set('password', login.password);

  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

  return this.http.post<TokenManager>(environment.oauth_server, body, { headers }).pipe(
    map(res => this.loadToken(res)),
    catchError(err => throwError(() => new Error(err)))
  );
}

/** ✅ Refrescar el token */
refreshToken(): Observable<TokenManager> {
  if (!this._isTokenRefreshing) {
    this._isTokenRefreshing = true;
    const body = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('client_id', environment.client_id)
      .set('client_secret', environment.client_secret)
      .set('refresh_token', this._token?.refresh_token || '');

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post<TokenManager>(environment.oauth_server, body, { headers }).pipe(
      map(res => {
        let token = this.loadToken(res);
        this._isTokenRefreshing = false;
        this._refreshing.next(token);
        return token;
      }),
      catchError(err => {
        if (err.error?.error === "invalid_grant") {
          err.status = 401;
        }
        this._isTokenRefreshing = false;
        this._refreshing.error(err);
        this.logout(true);
        return throwError(() => new Error(err));
      })
    );
  } else {
    return this._refreshing.asObservable();
  }
}

/** ✅ Cerrar sesión */
logout(replaceURL: boolean = false) {
  console.log(this._token);
  let isPatientaut = this._token?.idTipoUsuario === 3;

  if (!this._token) {
    this.loadToken(null);
    this.router.navigate(['login'], { replaceUrl: replaceURL });
  } else {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `${this._token.token_type} ${this._token.access_token}`);

    this.http.post(this.LOG_OUT_URL, {}, { headers }).subscribe(
      () => {
        this.loadToken(null);
        if (isPatientaut) {
          this.router.navigate(['login'], { replaceUrl: replaceURL }).then(() => window.location.reload());
        } else {
          this.router.navigate(['login'], { replaceUrl: replaceURL });
        }
      },
      () => {
        this.loadToken(null);
        if (isPatientaut) {
          this.router.navigate(['login'], { replaceUrl: replaceURL }).then(() => window.location.reload());
        } else {
          this.router.navigate(['login'], { replaceUrl: replaceURL });
        }
      }
    );
  }
}





}
