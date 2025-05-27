import {Pipe, PipeTransform} from '@angular/core';
import {formatNumber, parsePhoneNumber} from 'libphonenumber-js';


@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {


  transform(phoneValue: number | string): string {
    const stringPhone = phoneValue + '';
    const phoneNumber = parsePhoneNumber(stringPhone, 'MX');

    return phoneNumber.format('NATIONAL');
  }

}
