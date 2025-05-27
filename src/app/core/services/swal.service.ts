import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class SwalService {
  show(
    title: string,
    text: string = '',
    icon: SweetAlertIcon = 'info',
    timer: number = 2000
  ) {
    return Swal.fire({
      title,
      text,
      icon,
      timer,
      showConfirmButton: false,
      timerProgressBar: true
    });
  }

  success(message: string, title: string = 'Éxito') {
    this.show(title, message, 'success');
  }

  error(message: string, title: string = 'Error') {
    this.show(title, message, 'error');
  }

  warning(message: string, title: string = 'Advertencia') {
    this.show(title, message, 'warning');
  }

  info(message: string, title: string = 'Información') {
    this.show(title, message, 'info');
  }

  confirm(
    title: string,
    text: string = '¿Deseas continuar?',
    confirmButtonText: string = 'Sí',
    cancelButtonText: string = 'Cancelar'
  ) {
    return Swal.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText
    });
  }
}
