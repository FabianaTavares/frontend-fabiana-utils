import { Pipe, PipeTransform } from '@angular/core';
import { SimNaoEnum, SimNaoEnumMensagem } from '../../models/enum/sim-nao.enum';

@Pipe({
  name: 'simNaoTradutor'
})
export class SimNaoTradutorPipe implements PipeTransform {

  transform(value: SimNaoEnum): any {
    return SimNaoEnumMensagem[value];
  }

}
