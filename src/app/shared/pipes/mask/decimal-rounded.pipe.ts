import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalRounded'
})
export class DecimalRoundedPipe implements PipeTransform {

  transform(value: any) {
    value = Math.round(value * Math.pow(10,2)) / Math.pow(10,2);
    if(value != null) {
      const lastone = value.toString().split('').pop();
      if(lastone != '.'){
        value = value.tofixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
      }
    }
    return value;
  }

}
