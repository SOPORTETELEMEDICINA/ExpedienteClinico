import { Component } from '@angular/core';
import {
  ApexChart,
  ApexXAxis,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexNonAxisChartSeries
} from 'ng-apexcharts';
import { ConsultaService } from 'src/app/consulta/consulta.service';
import { MedicoView } from 'src/app/core/models/medicos/medico.model';
import { ConsultaView } from 'src/app/core/models/shared/consulta.model';
import { MedicosService } from 'src/app/medicos/medicos.service';
import { AuthService } from 'src/app/shared/auth/auth.service';


export type ApexBarChart = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  colors: string[];
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
};

export type ApexDonutChart = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss']
})
export class DoctorDashboardComponent {
  
  doctor : MedicoView = new MedicoView();

  consultasProximas: ConsultaView[] = [];

  pacientesPorGenero: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    colors: string[];
    yaxis: ApexYAxis;
     } = {
    series: [
      {
        name: 'MASCULINO',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 80, 55, 30, 40]
      },
      {
        name: 'FEMENINO',
        data: [20, 30, 45, 35, 40, 50, 60, 65, 70, 35, 20, 30]
      }
    ],
    chart: {
      type: 'bar',
      height: 300,
      stacked: false
    },
    xaxis: {
      categories: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']
    },
    dataLabels: {
      enabled: true
    },
    colors: ['#3f51b5', '#4caf50'], // Azul, Verde
    yaxis: {
      title: {
        text: 'PACIENTES'
      }
    }
  };

  nombreCompleto : string =""
  pacientesCronicos: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: string[];
    title: ApexTitleSubtitle;
    legend: ApexLegend;
  } = {
    series: [35, 25, 20, 20],
    chart: {
      type: 'donut',
      height: 300
    },
    labels: ['GLUCOSA', 'PRESION ARTERIAL', 'NUTRICION', 'SATURACION O2'],
    colors: ['#FF9800', '#f44336', '#4CAF50', '#2196F3'], // naranja, rojo, verde, azul
    title: {
      text: 'PACIENTES CRONICOS',
      align: 'center'
    },
    legend: {
      position: 'bottom'
    }
  };



  dashboardStats = [
    {
      icon: 'assets/img/icons/calendar.svg',
      title: 'CONSULTAS PENDIENTES',
      value: 250
    },
    {
      icon: 'assets/img/icons/profile-add.svg',
      title: 'CONSULTAS TERMINADAS',
      value: 140
    },
    {
      icon: 'assets/img/icons/profile-add.svg',
      title: 'PACIENTES REGISTRADOS',
      value: '25,250'
    },
    {
      icon: 'assets/img/icons/empty-wallet.svg',
      title: 'CONSULTAS TOTALES',
      value: '20,250'
    }
  ];

  constructor(private consultaService: ConsultaService,
    private medicoService: MedicosService,
    private authService: AuthService) {
    console.log('✅ DoctorDashboardComponent cargados'); 
  }


  ngOnInit(): void {
    const idUsuario = this.authService.token?.userId;

    this.medicoService.getMedicoPorIdUsuario(idUsuario).subscribe({
      next: (medico) => {
        this.doctor = medico;
        this.nombreCompleto = this.doctor.nombre +" "+this.doctor.apellidoPaterno + " "+this.doctor.apellidoMaterno
        this.cargarResumenDashboard();
      },
      error: (err) => {
        console.error('Error cargando médico', err);
      }
    });
  }



  private filtrarConsultasProximas(consultas: ConsultaView[]): void {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
  
    const sieteDiasDespues = new Date();
    sieteDiasDespues.setDate(hoy.getDate() + 7);
    sieteDiasDespues.setHours(23, 59, 59, 999);
  
    console.log('⏰ hoy:', hoy);
    console.log('📆 +7 días:', sieteDiasDespues);
  
    this.consultasProximas = consultas
      .filter(c => {
        const fecha = new Date(c.fechaConsulta);
        return c.idEstadoConsulta === 2 &&
               fecha >= hoy &&
               fecha <= sieteDiasDespues;
      })
      .sort((a, b) => new Date(a.fechaConsulta).getTime() - new Date(b.fechaConsulta).getTime())
  
    console.log('✅ Consultas próximas filtradas:', this.consultasProximas.map(c => ({
      id: c.idConsulta,
      fecha: new Date(c.fechaConsulta),
      paciente: c.nombrePaciente
    })));
  }
  

  cargarResumenDashboard(): void {
    const idGroup = 1; // este luego será dinámico
    const hoy = new Date();
    const startDate = new Date(hoy.getFullYear(), hoy.getMonth(), 1).getTime();
    const endDate = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0, 23, 59, 59).getTime();
  
    this.consultaService.getResumenDashboard(idGroup, this.doctor.idMedico, this.doctor.idUsuario, startDate, endDate)
    .subscribe({
      next: (response) => {
        const contenido = response.content?.[0] || {};
        const consultasNuevas = contenido.nuevas || [];
        const consultasFinalizadas = contenido.otras?.length || 0;
        const total = consultasNuevas.length + consultasFinalizadas;
  
        this.filtrarConsultasProximas(consultasNuevas);
  
        this.dashboardStats = [
          {
            icon: 'assets/img/icons/calendar.svg',
            title: 'CONSULTAS PENDIENTES',
            value: consultasNuevas.length
          },
          {
            icon: 'assets/img/icons/profile-add.svg',
            title: 'CONSULTAS TERMINADAS',
            value: consultasFinalizadas
          },
          {
            icon: 'assets/img/icons/profile-add.svg',
            title: 'PACIENTES REGISTRADOS',
            value: 25000
          },
          {
            icon: 'assets/img/icons/empty-wallet.svg',
            title: 'CONSULTAS TOTALES',
            value: total
          }
        ];
      },
      error: (err) => {
        console.error('Error obteniendo resumen de consultas', err);
      }
    });



  }
  


}
