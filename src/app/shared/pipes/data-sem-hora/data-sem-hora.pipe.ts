import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataSemHora'
})
export class DataSemHoraPipe implements PipeTransform {

  transform(value: string): string {
    if(typeof value === 'string'){
      return value.split(' ')[0];
    }
    throw new Error('O valor deve ser uma data no DD/MM/AAAA H: MM');
  }

}
