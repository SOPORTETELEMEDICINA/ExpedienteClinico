import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {

  transform(genero: string): string {
    genero = genero.toUpperCase();
    return ( genero === 'M' ? 'Masculino' : genero === 'F' ? 'Femenino' : 'No definido' )

  }

}
