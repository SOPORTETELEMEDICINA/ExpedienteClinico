import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Router } from '@angular/router';
import { PatientPageView } from 'src/app/core/models/pacientes/paciente.model';
import { PageImpl, PageRequest, PageRequestAtendidos } from 'src/app/core/models/shared/page.models';

@Component({
  selector: 'app-lista-pacientes-no-atendidos',
  templateUrl: './lista-pacientes-no-atendidos.component.html',
  styleUrl: './lista-pacientes-no-atendidos.component.scss'
})
export class ListaPacientesNoAtendidosComponent implements OnInit  {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef;

  pacientes: PatientPageView[] = [];
  paginado: PageImpl<PatientPageView> = new PageImpl();
  pageRequest: PageRequestAtendidos = new PageRequestAtendidos();
  paginasReducidas: (number | string)[] = [];
  isLoading: boolean = false;
  // Paginación
  totalRegistros = 0;
  totalPaginas = 0;
  paginaActual = 1;
  paginas: number[] = [];
  fin = 0;

  // Ordenamiento
  columnaOrden: string = 'nombre';
  ordenAscendente: boolean = true;

  // Búsqueda con debounce
  filtro = '';
  timeoutBusqueda: any;

  constructor(
    private pacienteService: PacienteService,
    private router: Router
  ) {
    this.pageRequest.page = 0;
    this.pageRequest.size = 10;
    this.pageRequest.orderColumn = 'nombre';
    this.pageRequest.orderType = 'asc';
  }

  ngOnInit(): void {
    this.buscarPacientes();
  }

  buscar(): void {
    if (this.timeoutBusqueda) clearTimeout(this.timeoutBusqueda);
    this.timeoutBusqueda = setTimeout(() => {
      const valor = this.txtBuscar?.nativeElement.value || '';

      if (valor.length >= 3 || valor.length === 0) {
        this.pageRequest.name = valor;
        this.pageRequest.page = 0;
        this.buscarPacientes();
      }
    }, 500);
  }

  // verDetalle(idPaciente: string) {
  //   this.router.navigate(['/paciente/detalle', idPaciente, 'perfil']);
  // }

  buscarPacientes(): void {
    this.isLoading = true;

    this.pageRequest.orderColumn = this.columnaOrden;
    this.pageRequest.orderType = this.ordenAscendente ? 'asc' : 'desc';
    this.pageRequest.selectGroup = 1;

    this.pacienteService.getPageAtendidos(this.pageRequest).subscribe({
      next: (res) => {
        this.paginado = res;
        this.pacientes = res.content;
        this.totalRegistros = res.totalElements;
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

  cambiarPagina(pagina: number | string): void {
    if (typeof pagina !== 'number' || pagina < 1 || pagina > this.totalPaginas) return;
    this.pageRequest.page = pagina - 1;
    this.buscarPacientes();
  }

  ordenarPor(columna: string): void {
    if (this.columnaOrden === columna) {
      this.ordenAscendente = !this.ordenAscendente;
    } else {
      this.columnaOrden = columna;
      this.ordenAscendente = true;
    }
    this.buscarPacientes();
  }

  recargarPacientes(): void {
    this.pageRequest.page = 0;
    this.pageRequest.name = '';
    this.txtBuscar.nativeElement.value = '';
    this.buscarPacientes();
  }

}
