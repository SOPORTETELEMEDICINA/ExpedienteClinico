import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'deleteNullWord'
})
export class DeleteNullWordPipe implements PipeTransform {
    constructor() {
    }

    transform(value: string): string {
        if (!value || typeof value != "string") {
            return '';
        }

        return value.replace(/\b(?:null)\b/igm, '');
    }

}
