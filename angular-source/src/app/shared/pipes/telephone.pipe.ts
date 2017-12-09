import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTelephone'
})
export class TelephonePipe implements PipeTransform {
  transform(value: string) {
    return value.replace(
      /([+]{1})([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/g,
      '$1$2 ($3) $4-$5-$6'
    );
  }
}
