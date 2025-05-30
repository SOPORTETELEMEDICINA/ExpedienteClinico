import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { routes } from 'src/app/shared/routes/routes';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public routes = routes;
  public logoBase64: string = '';
  public nombreUsuario: string = '';
  public descripcionUsuario: string = '';
  public listaGrupos: { nombre: string; logoBase64: string }[] = [];

  constructor(
    private authService: AuthService,
    public router: Router,
    private sideBar: SideBarService
  ) {}

  ngOnInit(): void {
    const token = this.authService.token;
    this.nombreUsuario = token?.name || 'USUARIO';
    this.descripcionUsuario = token?.decripcionTipoUsuario.toUpperCase() || '';
    this.logoBase64 = token?.imagen_grupo_principal || 'assets/img/logo-default.png';

    const grupos = token?.grupos || [];
    this.listaGrupos = grupos.map((grupo: any) => {
      const [id, info] = Object.entries(grupo)[0];
      const nombre = Object.keys(info)[0];
      const logoBase64 = info[nombre];
      return { nombre, logoBase64 };
    });
  }

  seleccionarGrupo(grupo: { nombre: string; logoBase64: string }): void {
    console.log('Grupo seleccionado:', grupo);
    this.descripcionUsuario = grupo.nombre;
    this.logoBase64 = grupo.logoBase64;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  irAltaPaciente(): void {
    this.router.navigate(['/pacientes/crear']);
  }

  irCambiarPassword(): void {
    this.router.navigate(['/cambiar-password']);
  }

  irConsultaNueva(): void {
    this.router.navigate(['/consulta/nueva']);
  }

  irConsultaRapida(): void {
    this.router.navigate(['/consulta/rapida']);
  }

  toggleSideBar(): void {
    this.sideBar.switchSideMenuPosition();
  }

  toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }
}