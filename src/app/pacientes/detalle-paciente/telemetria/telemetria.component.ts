import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-telemetria',
  templateUrl: './telemetria.component.html',
  styleUrls: ['./telemetria.component.scss']
})
export class TelemetriaComponent implements OnInit {
  idPaciente: string = '';
  seccionActual: 'hoja' | 'niveles' = 'hoja';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.idPaciente = params['idPaciente'];
      console.log('🧠 ID PACIENTE:', this.idPaciente);
    });
  }

  cambiarSeccion(seccion: 'hoja' | 'niveles') {
    this.seccionActual = seccion;
  }
}
