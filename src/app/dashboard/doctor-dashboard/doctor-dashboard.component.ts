import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss'] // 👈 'styleUrls', no 'styleUrl'
})
export class DoctorDashboardComponent {
  constructor() {
    console.log('✅ DoctorDashboardComponent cargado');
  }
}
