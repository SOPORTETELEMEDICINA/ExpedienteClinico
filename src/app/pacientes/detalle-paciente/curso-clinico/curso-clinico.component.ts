import { AfterViewInit, Compiler, Component, OnDestroy, OnInit } from '@angular/core';
import { PacienteService } from '../../paciente.service';
import { MedicosService } from 'src/app/medicos/medicos.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { ClinicCourseView, PatientView } from 'src/app/core/models/pacientes/paciente.model';
import { PageImpl } from 'src/app/core/models/shared/page.models';
import { NiomedicPageRequest } from 'src/app/core/models/shared/niomedicRequest.model';
import { ConsultaView,SignosVitales } from 'src/app/core/models/shared/consulta.model';
import { Observable, Subject, Subscription } from 'rxjs';
import { SwalService } from 'src/app/core/services/swal.service';
import { ConsultaService } from 'src/app/consulta/consulta.service';
declare var bootstrap: any;

@Component({
  selector: 'app-curso-clinico',
  templateUrl: './curso-clinico.component.html',
  styleUrls: ['./curso-clinico.component.scss']
})
export class CursoClinicoComponent  implements OnInit  {
  consultaSeleccionada: ConsultaView = null;
  cargandoConsulta: boolean = false;
  casoAbierto: number | null = null;

  activeTab: string = 'resumen';
  tabs: string[] = ['resumen', 'subjetivo', 'objetivo', 'analisis', 'tratamiento'];

  acordeones = [
    { titulo: 'FORMATOS', abierto: false },
    { titulo: 'ESTUDIOS', abierto: false },
    { titulo: 'IMAGENES', abierto: false },
    { titulo: 'DOCUMENTOS', abierto: false },
    { titulo: 'RECETAS', abierto: false },
  ];

  paginadoclinicCourseList: PageImpl<ClinicCourseView> = new PageImpl();
  private requestOptions: NiomedicPageRequest = new NiomedicPageRequest();
  onlyConsultas: ConsultaView[] = [];
  private idPaciente: string = null;
  patientDetails!: PatientView;
  private subscriptions: Subscription = new Subscription();
  loading: boolean = true;

  constructor(private router: Router,
    private doctorService: MedicosService,
    private pacienteService: PacienteService,
    private swal: SwalService,
    //private listaConsultaService: ConsultaListaService,
    private consultaService: ConsultaService,
    //private notificationService: NotificationService,
    //private compiler: Compiler,
    //private hasPermissionService: HasPermissionService,
    private authService: AuthService,
   ) {
this.requestOptions.size = 3;
this.requestOptions.page = 0;
}
  ngOnInit(): void {

        this.onlyConsultas = [];

        const data = this.pacienteService.getPacienteSeleccionado();

        if (data) {
          this.patientDetails = data;
          this.idPaciente = this.patientDetails.idPaciente
        } else {
          // Esperamos 100ms y volvemos a checar
          setTimeout(() => {
            const retryData = this.pacienteService.getPacienteSeleccionado();
            if (retryData) {
              this.patientDetails = retryData;
              this.idPaciente = this.patientDetails.idPaciente
            } else {
              // Ahora sí, redirigimos
              this.router.navigate(['/pacientes/lista']);
            }
          }, 150);
        }

        // if (this.pacienteService.pacienteActual && this.pacienteService.pacienteActual.idPaciente) {
        //     this.idPaciente = this.pacienteService.pacienteActual.idPaciente;
        // } else if (!this.idPaciente) {
        //     this.idPaciente = this.listaConsultaService.getConsultaSelected().idPaciente;
        // }

        if (!!this.idPaciente) {
            this.requestOptions.idPaciente = this.idPaciente;
            this.subscriptions.add(
                this.pacienteService.getCursoClinico(this.requestOptions)
                    .subscribe(clinicCoursePage => {
                        this.paginadoclinicCourseList = clinicCoursePage;
                       this.loadData();
                    }, () => {
                        this.loading = false;
                    } , () => this.loading = false));

            // $(window).bind("resize", this.adjustSizeColumns);
            // if(this.authService.token.idTipoUsuario !=3 ){
            // this.doctorService.getByIdUser(this.authService.token.userId)
            //     .subscribe((doctor) => {
            //         if (this.authService.token.userId == doctor.idUsuario) {
            //             this.doctor = doctor;
            //             if (this.doctor.idMedico) {
            //                this.preloadData();
    
            //             }
            //         }
            //     }, () => {
            //         this.pacienteService.getByIdUser(this.authService.token.userId)
            //             .subscribe((paciente) => {
            //                 if (this.authService.token.userId == paciente.idUsuario) {
            //                     this.paciente = paciente;
            //                     if (this.paciente.idPaciente) {
            //                        this.preloadData();
            //                     }
            //                 }
            //             }, () => {
            //                 this.doctor = null;
            //                 this.paciente = null;
            //                this.preloadData();
            //             })
            //     });
            // }
    
            // this.consultaService.getMapConsultTypes()
            //     .subscribe((mapConsultTypes) => this.tiposConsulta = mapConsultTypes);
    
        
        
        
        }
        // this.resizeModal();
        // setTimeout(() => {
        // }, 3000);
  }
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }


  cerrarCaso(caso: any): void {
    this.swal.confirm('¿Cerrar caso clínico?', 'Una vez cerrado no se podrá editar.')
      .then(result => {
        if (result.isConfirmed) {
          this.pacienteService.actualizarEstatusCursoClinico(caso.idPadecimiento)
            .subscribe({
              next: () => {
                caso.estatus = false; // lo marcas como cerrado localmente
                this.swal.success('El caso fue cerrado correctamente');
              },
              error: () => {
                this.swal.error('No se pudo cerrar el caso, intenta nuevamente.');
              }
            });
        }
      });
  }


  private loadData(): Observable<void> {
    let dataLoaded: Subject<void> = new Subject();
    dataLoaded.complete();


//      //   this.pageIndex = 1;

//     this.loadingDataTable = true;
//     let startD: Date, endD: Date, startDinit:Date ;

// //    -- startDinit = new Date();

//     startD = this.fechasFiltro[0];
//     startD.setHours(0, 0, 0, 0);
//     endD = this.fechasFiltro[1];
//     endD.setHours(23, 59, 59, 99);

//     let options: NiomedicPageRequest = new NiomedicPageRequest;
//     options.startDate = startD.getTime();
//     options.endDate = endD.getTime();
//     options.page = (this.pageIndex - 1);
//     options.size = this.pageSize;
//     options.orderColumn = 'fechaConsulta';
//     options.orderType = 'desc';
   
//     if (this.idPaciente) {
//         options.idPaciente = this.idPaciente;
//     }

//     this.consultaService.lastFilterConsulta = options;

//     this.consultaService.getPage(options)
//         .subscribe((pageConsultaView) => {
//             this.onlyConsultas = pageConsultaView.content;
//             this.loadingDataTable = false;
//             this.total = pageConsultaView.totalElements;

//             if(this.authService.token.idTipoUsuario !=3){
//                 this.loadExpedientes(Array.from(new Set(this.onlyConsultas.map(consulta => consulta.idPaciente))));
//                 setTimeout(this.adjustSizeColumns, 500);
//             }
            
//         });


    return dataLoaded.asObservable();
}




verConsultaDetalle(consulta: ConsultaView): void {
  this.cargandoConsulta = true;
  this.consultaSeleccionada = null;

  this.consultaService.getConsultaById(consulta.idConsulta).subscribe({
    next: (resp) => {
      // this.consultaSeleccionada = resp;
      this.consultaSeleccionada = {
        ...resp,
        signosVitales: Object.assign(new SignosVitales(), resp.signosVitales)
      };
    },
    error: () => {
      this.swal.error('No se pudo cargar la información de la consulta');
    },
    complete: () => {
      this.cargandoConsulta = false;
    }
  });
}

  toggleTab(tab: string): void {
    this.activeTab = tab;
  }

  togglePanel(panel: any): void {
    panel.abierto = !panel.abierto;
  }

  toggleCaso(id: number): void {
    if (this.casoAbierto === id) {
      this.casoAbierto = null;
      return;
    }
  
    this.casoAbierto = id;
    this.consultaSeleccionada = null;
  
    const clinicCourse = this.paginadoclinicCourseList.content.find(c => c.idPadecimiento === id);
    if (!clinicCourse) return;
  
    clinicCourse.loadingConsulta = true;
  
    const requestOptions: NiomedicPageRequest = {
      idPaciente: this.idPaciente,
      idPadecimiento: id,
      page: 0,
      size: 100,
      orderColumn: 'fechaCreacion',
      orderType: "desc",
      idUsuario: 0,
      idMedico: '',
      idConsulta: 0,
      numeroConsulta: 0,
      datosBusqueda: '',
      idTipoEvento: 0,
      group: '',
      active: false,
      name: ''
    };
  
    this.subscriptions.add(
      this.pacienteService.getListaConsultasCursoClinico(requestOptions).subscribe({
        next: consultaViewPage => {
          clinicCourse.consultaViewList = consultaViewPage.content;
  
          // // limpia y actualiza array auxiliar (si usas imágenes o algo similar)
          // this.objectImage.idConsulta.splice(0, this.objectImage.idConsulta.length);
          // for (let i = 0; i < clinicCourse.consultaViewList.length; i++) {
          //   this.objectImage.idConsulta.push(clinicCourse.consultaViewList[i].idConsulta);
          // }
  
          // // ajuste de layout si aplica
          // setTimeout(() => this.adjustSizeColumns?.(), 500);
        },
        error: () => {
          this.swal.error('No se pudo cargar el listado de consultas');
        },
        complete: () => clinicCourse.loadingConsulta = false
      })
    );
  }
  

  abrirModal(): void {
    const modalElement = document.getElementById('modalHistoriaClinica');
    const modal = new bootstrap.Modal(modalElement, {
      backdrop: 'static',
      keyboard: false
    });
    modal.show();
  }

  cerrarModal(): void {
    console.log('Cerrando modal');
  }

  imprimirEvento(): void {
    alert('Imprimir evento...');
  }
}
