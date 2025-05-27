import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';
import { PatientView } from 'src/app/core/models/pacientes/paciente.model';
import { PacienteService } from '../../paciente.service';

@Component({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  idPaciente: string = '';
  patientDetails!: PatientView;
  constructor(private route: ActivatedRoute,private router: Router,private pacienteService: PacienteService) {}

  ngOnInit(): void {

    const data = this.pacienteService.getPacienteSeleccionado();

    if (data) {
      this.patientDetails = data;
    } else {
      // Esperamos 100ms y volvemos a checar
      setTimeout(() => {
        const retryData = this.pacienteService.getPacienteSeleccionado();
        if (retryData) {
          this.patientDetails = retryData;
        } else {
          // Ahora sí, redirigimos
          this.router.navigate(['/pacientes/lista']);
        }
      }, 150);
    }

  }
}
