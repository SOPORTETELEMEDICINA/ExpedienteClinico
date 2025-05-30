import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { DataService } from 'src/app/shared/data/data.service';
import { MenuItem, SideBarData } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit{
  base = '';
  page = '';
  currentUrl = '';
  public classAdd = false;


  public multilevel: Array<boolean> = [false, false, false];

  public routes = routes;
  public sidebarData: Array<SideBarData> = [];

  public bitacorasExternas: any[] = [];

  ngOnInit(): void {
    const grupoId = localStorage.getItem('id_select_group');
  
    this.bitacorasExternas = [];
  
    if (grupoId === '36') {
      this.bitacorasExternas.push({
        label: 'REGISTRO DE ATENCIONES',
        url: 'https://informes.consultaenlinea.mx/menu_ADO/',
      });
    }
  
    if (grupoId === '33') {
      this.bitacorasExternas.push({
        label: 'CASA SOL',
        url: 'https://informes.consultaenlinea.mx/menu_CASASOL/',
      });
    }
  
    // Aplica a todos los demás grupos (médicos generales)
    if (grupoId !== '36' && grupoId !== '33') {
      this.bitacorasExternas.push({
        label: 'BITACORA MEDICA',
        url: 'https://informes.consultaenlinea.mx/menu_medico2/',
      });
    }
  }

  constructor(
    private data: DataService,
    private router: Router,
    private sideBar: SideBarService,
    private authService : AuthService
  ) {
    this.sidebarData = this.data.sideBar;
    router.events.subscribe((event: object) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
  }

  public expandSubMenus(menu: MenuItem): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.sidebarData.map((mainMenus: SideBarData) => {
      mainMenus.menu.map((resMenu: MenuItem) => {
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
  private getRoutes(route: { url: string }): void {
    const bodyTag = document.body;
    bodyTag.classList.remove('slide-nav')
    bodyTag.classList.remove('opened')
    this.currentUrl = route.url;

    const splitVal = route.url.split('/');


    this.base = splitVal[1];
    this.page = splitVal[2];
  }
  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sideBar.expandSideBar.next("true");
    } else {
      this.sideBar.expandSideBar.next("false");
    }
  }

  getBitacoraUrl(): string {
    const userId = this.authService.token?.userId; // o como obtengas el ID del usuario
    return `https://bitacora.miapp.com/usuario/${userId}`;
  }




}
