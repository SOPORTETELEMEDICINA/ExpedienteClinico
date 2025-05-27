import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edoCivil'
})
export class EdoCivilPipe implements PipeTransform {

  transform(estado: string, sexo?: string): string {
    if ( !sexo ) { sexo = 'M' }
    sexo = sexo.toUpperCase();

    const _DEFINE = {
      'V': 'Viud',
      'C': 'Casad',
      'D': 'Divorciad',
      'S': 'Solter'
    };

    const POST_FIJO = (sexo === 'M' ? 'o' : 'a');

    if ( ! _DEFINE[estado] ) {
      return estado;
    }

    return _DEFINE[estado] + POST_FIJO

  }

}
