import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[appNumeros]'
})
export class NumerosDirective {
    constructor(public el: ElementRef) {

        this.el.nativeElement.onkeypress = (evt) => {
            if (evt.which < 46 || evt.which > 57) {
                evt.preventDefault();
            }
        };

    }

}
