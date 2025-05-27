import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientView } from 'src/app/core/models/pacientes/paciente.model';
import { Subscription } from 'rxjs';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-detalle',
  templateUrl: './paciente-detalle.component.html',
  styleUrls: ['./paciente-detalle.component.scss']
})
export class PacienteDetalleComponent implements OnInit, OnDestroy {
  idPaciente: string = '';
  patientDetails!: PatientView;
  patientAge: number = 0;
  loading: boolean = true;

  tutor: boolean = false;
  nombr: string = '';
  telef: string = '';
  email: string = '';
  paren: string = '';

  ServGLU: boolean = false;
  ServPA: boolean = false;
  ServPE: boolean = false;
  ServCOV: boolean = false;

  subscriptions: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('idPaciente');
      if (id) {
        this.idPaciente = id;
        this.cargarDatosPaciente(id);
      } else {
        this.router.navigate(['/pacientes/lista']);
      }
    });
  }

  cargarDatosPaciente(id: string): void {
    this.loading = true;
    this.subscriptions.add(
      this.pacienteService.getPacienteById(id).subscribe({
        next: (patientView) => {
          if (!patientView || !patientView.idPaciente) {
            this.router.navigate(['/pacientes/lista']);
            return;
          }

          this.patientDetails = patientView;
          this.tutor = patientView.es_titular;

          if (patientView.catServiciosList) {
            patientView.catServiciosList.forEach(servicio => {
              switch (servicio.idCatServicio) {
                case 1: this.ServCOV = true; break;
                case 2: this.ServGLU = true; break;
                case 3: this.ServPE = true; break;
                case 4: this.ServPA = true; break;
              }
            });
          }

          patientView.fechaNacimiento = new Date(patientView.fechaNacimiento);
          this.patientAge = Math.abs(new Date(Date.now() - new Date(patientView.fechaNacimiento).getTime()).getUTCFullYear() - 1970);

          this.pacienteService.setPacienteSeleccionado(patientView);

          if (!this.tutor) {
            this.pacienteService.getTutores(patientView.idPaciente).subscribe(rt => {
              this.nombr = rt.nombreTutor;
              this.telef = rt.telefono;
              this.email = rt.email;
              this.paren = rt.parentesco;
            });
          }

          this.loading = false;
        },
        error: (err) => {
          console.error('Error al cargar paciente', err);
          this.router.navigate(['/pacientes/lista']);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
