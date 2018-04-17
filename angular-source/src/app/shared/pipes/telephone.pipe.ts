import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTelephone'
})
export class TelephonePipe implements PipeTransform {
  transform(value: string) {
    switch (value.length) {
      case 1:
      case 2:
      case 3: return value.replace(
        /([+]{1})([0-9]{2})/g,
        '$1$2'
      );
      case 4:
      case 5:
      case 6: return value.replace(
        /([+]{1})([0-9]{2})([0-9]{3})/g,
        '$1$2 ($3'
      );
      case 7:
      case 8:
      case 9: return value.replace(
          /([+]{1})([0-9]{2})([0-9]{3})([0-9]{3})/g,
          '$1$2 ($3) $4'
      );
      case 10:
      case 11: return value.replace(
        /([+]{1})([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{2})/g,
        '$1$2 ($3) $4-$5'
      );
      case 12:
      case 13: return value.replace(
        /([+]{1})([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/g,
        '$1$2 ($3) $4-$5-$6'
      );
      default: return value;
    }
  }
}
