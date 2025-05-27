import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'hexColorFromString'
})
export class HexColorFromStringPipe implements PipeTransform {
    stringToColour(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color;
        color = Math.floor(Math.abs((Math.sin(hash) * 10000) % 1 * 16777216)).toString(16);
        return '#' + Array(6 - color.length + 1).join('0') + color;
    }

    transform(value: any, args?: any): any {
        return this.stringToColour(value);
    }
}
