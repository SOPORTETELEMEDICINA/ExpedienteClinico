import { Component, Input, OnChanges } from '@angular/core';
import {
  ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexDataLabels, ApexStroke
} from 'ng-apexcharts';
import { NivelesGlu, NivelesPA, NivelesPeso, NivelesCovid } from 'src/app/core/models/shared/common.model';

@Component({
  selector: 'app-lineal',
  templateUrl: './lineal.component.html',
  styleUrls: ['./lineal.component.scss']
})
export class LinealComponent implements OnChanges {
  @Input() TIPO: string = '';
  @Input() glu: NivelesGlu[] = [];
  @Input() pa: NivelesPA[] = [];
  @Input() peso: NivelesPeso[] = [];
  @Input() covid: NivelesCovid[] = [];

  @Input() titleP: string = '';
  @Input() titleG: string = '';
  @Input() titlesC: string[] = [];
  @Input() titlesP: string[] = [];

  public chartOptions: {
    series: ApexAxisChartSeries,
    chart: ApexChart,
    xaxis: ApexXAxis,
    dataLabels: ApexDataLabels,
    stroke: ApexStroke,
    title: ApexTitleSubtitle
  } = {
    series: [],
    chart: {
      height: 350,
      type: 'line',
      zoom: { enabled: true }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: '',
      align: 'left'
    },
    xaxis: {
      categories: []
    }
  };

  ngOnChanges(): void {
    this.actualizarGrafica();
  }

  actualizarGrafica(): void {
    switch (this.TIPO) {
      case 'GLUCOSA':
        this.chartOptions.series = [{
          name: 'Glucosa',
          data: this.glu.map(g => g.glumedida)
        }];
        this.chartOptions.xaxis = {
          categories: this.glu.map(g => this.formatDate(g.glufechahora))
        };
        this.chartOptions.title.text = 'Niveles de Glucosa';
        break;
  
      case 'PRESION ARTERIAL':
        this.chartOptions.series = [
          {
            name: 'Sistólica',
            data: this.pa.map(p => p.pasysmedida)
          },
          {
            name: 'Diastólica',
            data: this.pa.map(p => p.padiamedida)
          },
          {
            name: 'Frecuencia Cardíaca',
            data: this.pa.map(p => p.pafcmedida)
          }
        ];
        this.chartOptions.xaxis = {
          categories: this.pa.map(p => this.formatDate(p.pafechahora))
        };
        this.chartOptions.title.text = 'Presión Arterial';
        break;
  
      case 'PESO':
        this.chartOptions.series = [{
          name: 'Peso',
          data: this.peso.map(p => p.pesomedida)
        }];
        this.chartOptions.xaxis = {
          categories: this.peso.map(p => this.formatDate(p.pesofechahora))
        };
        this.chartOptions.title.text = 'Peso Corporal';
        break;
  
      case 'SIGNOS VITALES':
        this.chartOptions.series = [
          {
            name: 'SpO2',
            data: this.covid.map(c => c.covidspomedida)
          },
          {
            name: 'Pulso',
            data: this.covid.map(c => c.covidpulsomedida)
          },
          {
            name: 'Temperatura',
            data: this.covid.map(c => c.covidtempmedida)
          }
        ];
        this.chartOptions.xaxis = {
          categories: this.covid.map(c => this.formatDate(c.covidfechahora))
        };
        this.chartOptions.title.text = 'Signos Vitales';
        break;
    }
  }
  

  private formatDate(fecha: any): string {
    const f = new Date(+fecha);
    return `${f.getDate().toString().padStart(2, '0')}/${(f.getMonth() + 1).toString().padStart(2, '0')}/${f.getFullYear()} ${f.getHours().toString().padStart(2, '0')}:${f.getMinutes().toString().padStart(2, '0')}`;
  }
}
