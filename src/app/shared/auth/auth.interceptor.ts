import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenObj = this.authService.token;

    let headers = req.headers;

    if (tokenObj && tokenObj.access_token) {
      headers = headers.set('Authorization', `${tokenObj.token_type} ${tokenObj.access_token}`);
    }

    if (tokenObj && tokenObj.hier_token) {
      headers = headers.set('hier_token', tokenObj.hier_token);
    }

    const authReq = req.clone({ headers });

    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (
          err.status === 401 ||
          err.error?.error === 'invalid_token'
        ) {
          console.warn('⛔ Token inválido detectado, cerrando sesión...');
          this.authService.logout(true);
        }
        return throwError(() => err);
      })
    );
  }
}
