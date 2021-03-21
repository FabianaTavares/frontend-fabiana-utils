import { DecimalRoundedPipe } from './../../pipes/mask/decimal-rounded.pipe';
import { ChangeDetectorRef, Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appDecimalMask]',
  providers: [DecimalRoundedPipe]
})
export class DecimalMaskDirective {

  constructor(
    private decimalRound: DecimalRoundedPipe,
    private ref: ChangeDetectorRef
  ) { }

  @HostListener('document:keyup', ['$event.target'])
  onKeyup(htmlInputElement: HTMLInputElement){
    //primeiro remove pontuação de centavos e milhar
    if(htmlInputElement.attributes['appDecimalMask'] !== undefined){
      let valorString = htmlInputElement.value.replace(/\./gi, '').replace(',', '');
      if(valorString && /\d+/.test(valorString)){
        const valor = parseFloat(valorString)/100;
        htmlInputElement.value = this.decimalRound.transform(valor);
      }else {
        htmlInputElement.value = '';
      }

      //atualiza o DOM para o angular refletir as alterações.
      this.ref.detectChanges();
    }
  }

}
