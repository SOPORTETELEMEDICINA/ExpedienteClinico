import { Injectable } from '@angular/core';
import {CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {

    if (this.authService.isTokenValid()) {
      return true;
    } else {
      console.warn('🔒 Token inválido o expirado, redirigiendo...');
      this.authService.logout(true); // limpia y redirige
      return false;
    }
  }
}
