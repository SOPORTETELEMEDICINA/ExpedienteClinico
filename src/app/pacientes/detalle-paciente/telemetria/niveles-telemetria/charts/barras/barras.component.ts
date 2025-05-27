import { Component, Input, OnChanges } from '@angular/core';
import {
  ApexChart,
  ApexXAxis,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexStroke,
  ApexFill,
  ApexMarkers,
  ApexYAxis
} from 'ng-apexcharts';
import { NivelesGlu, NivelesPA, NivelesPeso, NivelesCovid } from 'src/app/core/models/shared/common.model';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.scss']
})
export class BarrasComponent implements OnChanges {
  @Input() TIPO: string = '';
  @Input() glu: NivelesGlu[] = [];
  @Input() pa: NivelesPA[] = [];
  @Input() peso: NivelesPeso[] = [];
  @Input() covid: NivelesCovid[] = [];
  @Input() mostrarValoresEnBarras: boolean = false; // Cambiado a false por defecto

  chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    title: ApexTitleSubtitle;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    stroke: ApexStroke;
    fill: ApexFill;
    markers: ApexMarkers;
    yaxis: ApexYAxis;
  } = {
    series: [],
    chart: {
      type: 'bar',
      height: 350
    },
    title: {
      text: ''
    },
    xaxis: {
      categories: []
    },
    dataLabels: {
      enabled: false // Asegurarse de que los valores dentro de las barras no se muestren
    },
    stroke: {
      width: 1
    },
    fill: {
      opacity: 1
    },
    markers: {
      size: 0
    },
    yaxis: {
      title: {
        text: ''
      }
    }
  };

  ngOnChanges(): void {
    this.actualizarGrafica();
  }

  actualizarGrafica(): void {
    this.chartOptions.dataLabels.enabled = this.mostrarValoresEnBarras;

    switch (this.TIPO) {
      case 'GLUCOSA':
        this.chartOptions.series = [{
          name: 'Glucosa',
          data: this.glu.map(g => g.glumedida)
        }];
        this.chartOptions.xaxis.categories = this.glu.map(g => this.formatDate(g.glufechahora));
        this.chartOptions.title.text = 'Glucosa';
        this.chartOptions.yaxis.title.text = 'mg/dl';
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
        this.chartOptions.xaxis.categories = this.pa.map(p => this.formatDate(p.pafechahora));
        this.chartOptions.title.text = 'Presión Arterial';
        this.chartOptions.yaxis.title.text = 'mmHg';
        break;

      case 'PESO':
        this.chartOptions.series = [{
          name: 'Peso',
          data: this.peso.map(p => p.pesomedida)
        }];
        this.chartOptions.xaxis.categories = this.peso.map(p => this.formatDate(p.pesofechahora));
        this.chartOptions.title.text = 'Peso Corporal';
        this.chartOptions.yaxis.title.text = 'kg';
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
        this.chartOptions.xaxis.categories = this.covid.map(c => this.formatDate(c.covidfechahora));
        this.chartOptions.title.text = 'Signos Vitales';
        this.chartOptions.yaxis.title.text = '';
        break;
    }
  }

  formatDate(fecha: any): string {
    const date = new Date(+fecha);
    return `${date.getDate().toString().padStart(2, '0')}-${date.toLocaleString('default', { month: 'short' })}-${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }
}
