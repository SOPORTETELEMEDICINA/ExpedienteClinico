import { Pipe, PipeTransform } from '@angular/core';
import {ConsultaView} from '../../+consulta/shared/consulta.classes';

@Pipe({
  name: 'dashEnfermera'
})
export class DashEnfermeraPipe implements PipeTransform {

  transform(arrayConsultas: ConsultaView[], nombre?: string): any {
    if (nombre === undefined || nombre === '' || nombre === null) {
      return arrayConsultas;
    } else {
      nombre =  nombre.toLowerCase();
      return arrayConsultas.filter((consulta) => {
        return  consulta.nombrePaciente.toLowerCase().includes(nombre);
      });
    }
  }

}
