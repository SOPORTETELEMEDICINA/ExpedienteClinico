import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'lpadNumberPipe'
})
export class LeftPadNumberPipe implements PipeTransform {
    constructor() {
    }

    transform(number: number, len: number = 2, pad: string = '0'): string {
        /// convert to string for concatenate
        let snumber = '' + number;


        let left = snumber.substr(0, snumber.indexOf('.'));
        let right = '';
        if (left.length === 0) {
            left = snumber;
        } else {
            right = '' + snumber.substr(snumber.indexOf('.'), snumber.length );
        }

        if (left.length >= len) {
            return snumber;
        }

        while (left.length < len) {
            left = pad + left;
        }

        snumber = left + right;
        return  snumber;

    }
}
