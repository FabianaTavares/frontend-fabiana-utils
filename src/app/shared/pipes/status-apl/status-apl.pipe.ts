import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusApl'
})
export class StatusAplPipe implements PipeTransform {

  transform(valor: string): string {
    if (valor != null) {
      switch (valor) {
        case 'A':
          return 'aprovado';
        case 'R':
          return 'reprovado';
        case 'EA':
          return 'em-analise';
        case 'C':
          return 'cancelado';
        default:
          return '';
      }
    }
  }

}
