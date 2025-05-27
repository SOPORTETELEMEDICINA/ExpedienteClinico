import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenObj = this.authService.token;

    if (tokenObj && tokenObj.access_token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `${tokenObj.token_type} ${tokenObj.access_token}`)
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
