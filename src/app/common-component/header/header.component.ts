import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, Observable, Subscription, switchMap, tap } from 'rxjs';
import { ConsultaService } from 'src/app/consulta/consulta.service';
import { MedicoView } from 'src/app/core/models/medicos/medico.model';
import { PatientPageView, PatientView } from 'src/app/core/models/pacientes/paciente.model';
import { CanalConsulta, ConsultaView, LaboralInhability, SignosVitales } from 'src/app/core/models/shared/consulta.model';
import { NiomedicPageRequest } from 'src/app/core/models/shared/niomedicRequest.model';
import { PageImpl, PageRequest } from 'src/app/core/models/shared/page.models';
import { MedicosService } from 'src/app/medicos/medicos.service';
import { PacienteService } from 'src/app/pacientes/paciente.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { routes } from 'src/app/shared/routes/routes';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { SwalService } from 'src/app/core/services/swal.service';
import { ExploracionFisica } from 'src/app/core/models/shared/common.model';
import { environment } from 'src/environments/environment';
import { ShaService } from 'src/app/shared/jssha/jssha.service';

declare var bootstrap: any;
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
  consulta: ConsultaView = new ConsultaView(); // o {} si no tienes constructor
  consultaRapida: ConsultaView = new ConsultaView();
  consultaNueva: ConsultaView = new ConsultaView();
  
  passwordActual = '';
  nuevaPassword = '';
  confirmarPassword = '';
  linkAltaPaciente = '';
  selectedPaciente: PatientPageView | null = null;;
  selectedCanal : string = 'PRESENCIAL';
  usuario = this.authService.token;
  idGroup = Number(localStorage.getItem('id_select_group'));
  pageRequest: PageRequest = new PageRequest();
  medicoLogueado: MedicoView;



  
pacientesFiltrados: PatientPageView[] = [];

  nombremedicologeado:string;
  especialidadmedicologeado:string;
  busquedaPaciente = '';
  scrollBloqueado = false;
  pacientes: PatientPageView[] = [];
  paginado: PageImpl<PatientPageView> = new PageImpl();
  // Paginación
  totalRegistros = 0;
  totalPaginas = 0;
  paginaActual = 1;
  paginas: number[] = [];
  fin = 0;

  pacienteControl = new FormControl();
  busquedaSub$: Subscription;


  constructor(
    private authService: AuthService,
    public router: Router,
    private sideBar: SideBarService,
    private consultaService: ConsultaService,
    private pacienteService:PacienteService,
    private doctorService:MedicosService,
    private shaService: ShaService,
    private swal:SwalService
  ) {}

  ngOnInit(): void {

    
    this.consulta = new ConsultaView();
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


  guardarConsultaNueva(): void {
    if (!this.selectedPaciente || !this.selectedPaciente.idPaciente || !this.medicoLogueado) {
      this.swal.warning("SELECCIONE UN MEDICO Y UN PACIENTE","ADEVERTENCIA")
      return;
    }
    const now = new Date();
    this.consultaNueva.idPaciente = this.selectedPaciente.idPaciente;
    this.consultaNueva.nombrePaciente = this.selectedPaciente.nombre;
    this.consultaNueva.idMedico = this.medicoLogueado.idMedico;
    this.consultaNueva.nombreMedico = this.usuario.name;
    this.consultaNueva.especialidad = this.medicoLogueado.especialidadViewList?.[0]?.especialidad || 'GENERAL';
    this.consultaNueva.tipoConsulta = 'NUEVA';
    this.consultaNueva.idTipoConsulta = 10;
    this.consultaNueva.canal = this.selectedCanal.toUpperCase();
    this.consultaNueva.idGroup = this.idGroup;
    this.consultaNueva.creadoPor = this.usuario.name;
    this.consultaNueva.fechaCrecion = now;
    this.consultaNueva.fechaConsulta = now;
    this.consultaNueva.fechaConsultaFin = now;
    this.consultaNueva.estadoConsulta = "NUEVA";
    this.consultaNueva.idEstadoConsulta = 1;
    this.consultaNueva.numeroConsulta = '' + Math.floor(Math.random() * 900000000);
  
    this.consultaService.createConsulta(this.consultaNueva).subscribe({
      next: (resp: ConsultaView) => {
        this.swal.success("CONSULTA CREADA CON EXITO");
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalConsultaNueva')!);
          modal?.hide();

        // this.consultaService.iniciarConsulta(resp.idConsulta, {
        //   activo: true,
        //   color: '#00FF00',
        //   descripcion: 'CONSULTA EN TURNO',
        //   idEstadoConsulta: 2
        // }).subscribe(() => {
          
  
        //   this.router.navigate(['/pacientes/detalle', this.selectedPaciente.idPaciente, 'consulta-actual'], {
        //     queryParams: { idConsulta: resp.idConsulta }
        //   });
        // });
      },
      error: () => this.swal.error("ERROR AL GUARDAR CONSULTA")
    });
  }


  guardarConsultaRapida(): void {

    if (!this.selectedPaciente || !this.selectedPaciente.idPaciente || !this.medicoLogueado) {
      this.swal.warning("SELECCIONE UN MEDICO Y UN PACIENTE","ADEVERTENCIA")
      return;
    }
  
    const now = new Date();
  
    this.consultaRapida.idPaciente = this.selectedPaciente.idPaciente;
    this.consultaRapida.nombrePaciente = this.selectedPaciente.nombre;
    this.consultaRapida.idMedico = this.medicoLogueado.idMedico;
    this.consultaRapida.especialidad = this.medicoLogueado.especialidadViewList?.[0]?.especialidad || 'MEDICINA GENERAL';
    this.consultaRapida.nombreMedico = this.usuario.name;
    this.consultaRapida.tipoConsulta = 'CONSULTA RAPIDA';
    this.consultaRapida.idTipoConsulta = 10;
    this.consultaRapida.canal = 'PRESENCIAL';
    this.consultaRapida.idGroup = this.idGroup;
    this.consultaRapida.creadoPor = this.usuario.name;
    this.consultaRapida.fechaCrecion = now;
    this.consultaRapida.fechaConsulta = now;
    this.consultaRapida.fechaConsultaFin = now;
    this.consultaRapida.numeroConsulta = '' + Math.floor(Math.random() * 900000000);
    this.consultaRapida.estadoConsulta = "NUEVA";
    this.consultaRapida.idEstadoConsulta = 1;
    this.consultaRapida.signosVitales ??= new SignosVitales();
    this.consultaRapida.exploracionFisica ??= new ExploracionFisica();
    this.consultaRapida.incapacidadTemporal ??= new LaboralInhability();
    this.consultaRapida.catDolometroView ??= { idCatDolometro: 1, nivel: 1, doloDescripcion: "BIEN" };
    this.consultaRapida.listaPadecimiento ??= [];
    this.consultaRapida.listaTartamiento ??= [];
    this.consultaRapida.listaCatCie9 ??= [];
    this.consultaRapida.listaCatCie10 ??= [];
  
    this.consultaService.createConsulta(this.consultaRapida).subscribe({
      next: (resp: ConsultaView) => {
        // Lógica para iniciar consulta con estado deseado
        const estado = {
          activo: true,
          color: '#00FF00',
          descripcion: 'CONSULTA EN TURNO',
          idEstadoConsulta: 2
        };
    
        this.consultaService.iniciarConsulta(resp.idConsulta, estado).subscribe({
          next: () => {
            this.swal.success("CONSULTA RAPIDA INICIADA CON EXITO");
            // Cerrar modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('modalConsultaRapida')!);
            modal?.hide();
    
            // Redirigir
            this.router.navigate(
              ['/pacientes/detalle', this.selectedPaciente.idPaciente, 'consulta-actual'],
              { queryParams: { idConsulta: resp.idConsulta } }
            );
          },
          error: (err) => {
            console.error('Error al iniciar consulta rápida', err);
            this.swal.error("ERROR AL INICIAR CONSULTA RAPIDA");
          }
        });
      },
      error: (err) => {
        console.error('Error al guardar consulta rápida', err); 
        this.swal.error("ERROR AL GUARDAR CONSULTA RÁPIDA");
      }
    });

  }


 



  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  irAltaPaciente(): void {
    const modal = new bootstrap.Modal(document.getElementById('modalAltaPaciente')!);
    modal.show();
  }
  
  irCambiarPassword(): void {
    const modal = new bootstrap.Modal(document.getElementById('modalCambiarPassword')!);
    modal.show();
  }

  seleccionarPaciente(event: MatAutocompleteSelectedEvent): void {
    const paciente = event.option.value as PatientPageView;
  
    this.selectedPaciente = paciente;
  }

  cambiarPassword(): void {
    // Validaciones básicas
    if (!this.passwordActual || !this.nuevaPassword || !this.confirmarPassword) {

      this.swal.warning('LOS CAMPOS NO PUEDEN ESTAR VACIOS');
     
      return;
    }
  
    if (this.nuevaPassword !== this.confirmarPassword) {
        this.swal.warning('LAS CONTRASEÑAS NO COINCIDEN');
      return;
    }
  
    // Obtención de datos del usuario
    const username = this.authService.token.username;
    const userId = this.authService.token.userId;
  
    const oldpassEncrypted = this.shaService.encrypt(`${this.passwordActual}{${username}}`, 1000, 'SHA-256', 'HEX');
    const newpassEncrypted = this.shaService.encrypt(`${this.nuevaPassword}{${username}}`, 1000, 'SHA-256', 'HEX');
    const newpassEncrypted2 = this.shaService.encrypt(`${this.nuevaPassword}{${username}}`, 1000, 'SHA-256', 'HEX');
    const newpassEncrypted3 = this.shaService.encrypt(`${this.nuevaPassword}{${username}}`, 1000, 'SHA-256', 'HEX');
  
    const payload = {
      username: username,
      oldPassword: oldpassEncrypted,
      newPassword: newpassEncrypted,
      newPassword2: newpassEncrypted2,
      newPassword3: newpassEncrypted3,
      password: this.nuevaPassword
    };
  
    this.consultaService.cambiarPassword(payload).subscribe({
      next: () => {
        this.swal.success('CONTRASEÑA MODIFICADA');
        this.passwordActual = ''
        this.nuevaPassword = ''
        this.confirmarPassword = ''
        document.getElementById('cerrarModalPassword')?.click();  
      },
      error: (err) => {
        this.swal.error('OCURRIO UN ERROR, USUARIO Y CONTRASEÑA NO ENCONTRADA');
        console.error(err);
      }
    });
  }
  
  copiarLinkAltaPaciente(): void {
    navigator.clipboard.writeText(this.linkAltaPaciente)
      .then(() => console.log('Link copiado al portapapeles'))
      .catch(() => console.log('No se pudo copiar el link'));
  }


  generarLinkAltaPaciente(): void {
    const username = this.authService.token.username;
    const iduser = this.authService.token.userId;
    const idselectedGroup = localStorage.getItem('id_select_group');
    const idgrupo = Number(idselectedGroup);
  
    this.consultaService.generarLinkAltaPaciente(username, String(iduser), idgrupo).subscribe({
      next: (respuestaTextoPlano: string) => {
        const hash = respuestaTextoPlano.split('=')[1]; // Extraer hash del string "hash=..."
        this.linkAltaPaciente = `${environment.url_np}/#/TOKEN?hash=${hash}`;
      },
      error: (err) => {
        console.error('Error generando link de alta:', err);
      }
    });
  }



  irConsultaNueva(): void {
    this.InitiConsulta();
    const modal = new bootstrap.Modal(document.getElementById('modalConsultaNueva')!);
    modal.show();
  }
  

  displayPacienteFn(paciente: PatientPageView): string {
    return paciente ? `${paciente.nombre}` : '';
  }


  InitiConsulta(): void{
    if(this.usuario.idTipoUsuario ==2){
      this.doctorService.getMedicoPorIdUsuario(this.usuario.userId).subscribe((medico) => {
        this.medicoLogueado = medico;
        this.especialidadmedicologeado = this.medicoLogueado.especialidadViewList?.[0]?.especialidad || 'MEDICINA GENERAL';
        this.nombremedicologeado = this.usuario.name;
      });
    }
   
    this.pacienteControl.setValue('');
    this.selectedPaciente = null;
    this.pacientesFiltrados = [];


    this.pacienteControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter((valor) => typeof valor === 'string' && valor.length > 1), // 👈 esto es clave
        switchMap((termino: string) => {
          this.pageRequest = {
            page: 0,
            size: 10,
            name: termino,
            selectGroup: Number(localStorage.getItem('id_select_group')),
            active: true,
            orderColumn: 'nombre',
            orderType: 'asc'
          };
          return this.pacienteService.getPage(this.pageRequest);
        })
      )
      .subscribe({
        next: (res) => {
          this.pacientesFiltrados = res.content || [];
        },
        error: () => {
          this.pacientesFiltrados = [];
        }
      });
  }


  irConsultaRapida(): void {
    this.InitiConsulta();
    const modal = new bootstrap.Modal(document.getElementById('modalConsultaRapida')!);
    modal.show();
  }
  toggleSideBar(): void {
    this.sideBar.switchSideMenuPosition();
  }

  toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }
}