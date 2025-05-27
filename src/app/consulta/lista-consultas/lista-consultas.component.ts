import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { MedicosService } from '../../medicos/medicos.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { PageImpl, PageRequest } from 'src/app/core/models/shared/page.models';
import { NiomedicPageRequest } from 'src/app/core/models/shared/niomedicRequest.model';
import { ConsultaView } from 'src/app/core/models/shared/consulta.model';

@Component({
  selector: 'app-lista-consultas',
  templateUrl: './lista-consultas.component.html',
  styleUrls: ['./lista-consultas.component.scss']
})
export class ListaConsultasComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef;

  consultas: ConsultaView[] = [];
  paginado: PageImpl<ConsultaView> = new PageImpl();
  pageRequest: NiomedicPageRequest = new NiomedicPageRequest();

  paginaActual = 1;
  totalPaginas = 0;
  totalConsultas = 0;
  fin = 0;
  paginasReducidas: (number | string)[] = [];

  isLoading = false;
  timeoutBusqueda: any;
  columnaOrden = 'fechaConsulta';
  ordenAscendente = false;
  idMedico = '';
  fechaInicio!: string;
  fechaFin!: string;

  constructor(
    private consultaService: ConsultaService,
    private medicoService: MedicosService,
    private authService: AuthService
  ) {
    const hoy = new Date();
    this.fechaInicio = this.formatearFecha(new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()));
    this.fechaFin = this.formatearFecha(new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()));

    this.pageRequest.page = 0;
    this.pageRequest.size = 5;
    this.pageRequest.orderColumn = this.columnaOrden;
    this.pageRequest.orderType = this.ordenAscendente ? 'asc' : 'desc';
  }

  ngOnInit(): void {
    const idUsuario = this.authService.token?.userId;

    this.medicoService.getMedicoPorIdUsuario(idUsuario).subscribe({
      next: (medico) => {
        this.idMedico = medico.idMedico;
        this.buscarConsultas();
      },
      error: (err) => {
        console.error('Error cargando médico', err);
      }
    });
  }

  buscar(): void {
    if (this.timeoutBusqueda) clearTimeout(this.timeoutBusqueda);

    this.timeoutBusqueda = setTimeout(() => {
      const valor = this.txtBuscar?.nativeElement.value || '';

      if (valor.length >= 3 || valor.length === 0) {
        this.pageRequest.name = valor;
        this.pageRequest.page = 0;
        this.buscarConsultas();
      }
    }, 500);
  }

  buscarConsultas(): void {
    if (!this.idMedico || !this.fechaInicio || !this.fechaFin) return;

    const fechaInicioParsed = new Date(this.fechaInicio);
    const fechaFinParsed = new Date(this.fechaFin);
    if (fechaInicioParsed > fechaFinParsed) return;

    this.isLoading = true;

    this.pageRequest.orderColumn = this.columnaOrden;
    this.pageRequest.orderType = this.ordenAscendente ? 'asc' : 'desc';
    this.pageRequest.idMedico = this.idMedico;
    this.pageRequest.startDate = fechaInicioParsed.setHours(0, 0, 0, 0);
    this.pageRequest.endDate = fechaFinParsed.setHours(23, 59, 59, 999);

    this.consultaService.getConsultas(this.pageRequest).subscribe({
      next: (res) => {
        this.paginado = res;
        this.consultas = res.content;
        this.totalConsultas = res.totalElements;
        this.totalPaginas = res.totalPages;
        this.paginaActual = res.number + 1;
        this.fin = res.number * res.size + res.numberOfElements;
        this.paginasReducidas = this.getPaginasReducidas(this.paginaActual, this.totalPaginas);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  formatearFecha(fecha: Date): string {
    return fecha.toISOString().substring(0, 10);
  }

  recargarConsultas(): void {
    this.pageRequest.page = 0;
    this.pageRequest.name = '';
    this.txtBuscar.nativeElement.value = '';
    this.buscarConsultas();
  }

  ordenarPor(columna: string): void {
    if (this.columnaOrden === columna) {
      this.ordenAscendente = !this.ordenAscendente;
    } else {
      this.columnaOrden = columna;
      this.ordenAscendente = true;
    }
    this.buscarConsultas();
  }

  cambiarPagina(pagina: number | string): void {
    if (typeof pagina !== 'number' || pagina < 1 || pagina > this.totalPaginas) return;
    this.pageRequest.page = pagina - 1;
    this.buscarConsultas();
  }

  getPaginasReducidas(current: number, total: number): (number | string)[] {
    const delta = 2;
    const range = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number | undefined;

    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l !== undefined) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l > 2) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  }
}
