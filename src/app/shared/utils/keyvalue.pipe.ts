import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'keyvalue',
    pure: false
})
export class KeyvaluePipe implements PipeTransform {
    transform(map: Map<any, any>): keyvalueObj[] {
        let keyvalues: keyvalueObj[] = [];
        map.forEach((value, key) => {
            keyvalues.push({key: key, value: value});
        });
        return keyvalues;
    }
}

export class keyvalueObj {
    key: any;
    value: any;
}