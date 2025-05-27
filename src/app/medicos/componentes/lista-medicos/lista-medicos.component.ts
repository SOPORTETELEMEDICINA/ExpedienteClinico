import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MedicosService } from '../../medicos.service';
import { MedicoView } from 'src/app/core/models/medicos/medico.model';
import { PageRequest,PageImpl } from '../../../core/models/shared/page.models';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html'
})
export class ListaMedicosComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar: ElementRef;

  filtro: string = '';
  medicos: MedicoView[] = [];
  paginaActual = 1;
  totalPaginas = 0;
  totalRegistros = 0;
  paginas: number[] = [];
  tamanioPagina = 10;

  columnaOrden: string = 'nombre';
  ordenAscendente: boolean = true;

  inicio: number = 1;
  fin: number = 10;

  timeoutBusqueda: any;

  constructor(private medicoService: MedicosService) {}

  ngOnInit(): void {
    this.cargarMedicos();
  }

  buscar(): void {
    if (this.timeoutBusqueda) clearTimeout(this.timeoutBusqueda);
    this.timeoutBusqueda = setTimeout(() => {
      const valor = this.txtBuscar?.nativeElement.value || '';
  
      if (valor.length >= 3 || valor.length === 0) {
        this.filtro = valor;
        this.paginaActual = 1;
        this.cargarMedicos();
      }
    }, 500);
  }

  ordenarPor(columna: string): void {
    if (this.columnaOrden === columna) {
      this.ordenAscendente = !this.ordenAscendente;
    } else {
      this.columnaOrden = columna;
      this.ordenAscendente = true;
    }
    this.cargarMedicos();
  }

  cambiarPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
      this.cargarMedicos();
    }
  }
  recargarMedicos(): void {
    this.paginaActual = 1;
    this.filtro = '';
    if (this.txtBuscar) {
      this.txtBuscar.nativeElement.value = '';
    }
    this.cargarMedicos();
  }
  cargarMedicos(): void {
    const pageRequest: PageRequest = {
      active: true,
      page: this.paginaActual - 1,
      size: this.tamanioPagina,
      orderColumn: this.columnaOrden,
      orderType: this.ordenAscendente ? 'asc' : 'desc',
      selectGroup: 33,
      datosBusqueda: this.filtro,
      name: this.filtro
    };

    this.medicoService.getMedicosPaginated(pageRequest).subscribe((resp: PageImpl<MedicoView>) => {
      this.medicos = resp.content;
      this.totalPaginas = resp.totalPages;
      this.totalRegistros = resp.totalElements;

      this.paginas = Array.from({ length: this.totalPaginas }, (_, i) => i + 1);

      this.inicio = (this.paginaActual - 1) * this.tamanioPagina + 1;
      this.fin = this.inicio + this.medicos.length - 1;
    });
  }
}