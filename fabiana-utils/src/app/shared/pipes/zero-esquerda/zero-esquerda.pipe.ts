import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroEsquerda'
})
export class ZeroEsquerdaPipe implements PipeTransform {

  public static zeroEsquerda(value, maxSize){
    if(value) {
      value += '';
      return '0'.repeat(maxSize - value.length) + value;
    }
    return '-';
  }

  transform(value: any, maxSize?: any): any {
    return ZeroEsquerdaPipe.zeroEsquerda(value, maxSize);
  }

}
