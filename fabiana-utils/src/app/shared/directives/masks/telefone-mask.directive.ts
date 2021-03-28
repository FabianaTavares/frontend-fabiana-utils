import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as StringMask from 'string-mask';

@Directive({
  selector: '[appTelefoneMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TelefoneMaskDirective),
    multi: true
  }]
})
export class TelefoneMaskDirective {

  onTouched: any;
  onChange: any;
  value: any;
  private regexApplyTelefone: StringMask;
  private regexApplyTelefoneDigito: StringMask;
  private readonly tamanhoTelefoneSemNove = 10;
  private readonly tamanhoTelefoneComNove = 11;
  private digitoBackspace = 8;

  constructor(
    private element: ElementRef
  ) {
    this.regexApplyTelefone = new StringMask('(00) 0000-0000');
    this.regexApplyTelefoneDigito = new StringMask('(00) 00000-0000');
  }

  writeValue(value: any): void {
    if(value != null){
      if(value.indexOf('.') === -1){
        if(value.length === this.tamanhoTelefoneSemNove){
          this.element.nativeElement.value = this.regexApplyTelefone.apply(value);
        }else if(value.length === this.tamanhoTelefoneComNove){
          this.element.nativeElement.value = this.regexApplyTelefoneDigito.apply(value);
        }
      }
    }
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private getValueAbsoluto(targetValue: string): string {
    return targetValue.replace(/\D/g, '');
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any){
    const valor = this.getValueAbsoluto($event.targe.value);
    if($event.keyCode === this.digitoBackspace){
      if(valor.length === this.tamanhoTelefoneSemNove){
        this.aplicarMascara($event);
      }else {
        this.onChange(valor);
        return;
      }
    }
    this.aplicarMascara($event);
  }

  @HostListener('keydown', ['$event'])
  onKeydown($event: any){
    const valor = this.getValueAbsoluto($event.target.value);
    if($event.keyCode === this.digitoBackspace){
      if(valor.length === this.tamanhoTelefoneSemNove){
        this.aplicarMascara($event);
      }else {
        this.onChange(valor);
        return;
      }
    }
    this.aplicarMascara($event);
  }

  aplicarMascara($event: any){
    const valor = this.getValueAbsoluto($event.target.value);

    if(valor.length <= this.tamanhoTelefoneSemNove){
      this.onChange(valor);
      $event.target.value = this.regexApplyTelefone.apply(valor);
    }else if(valor.length <= this.tamanhoTelefoneComNove){
      this.onChange(valor);
      $event.target.value = this.regexApplyTelefoneDigito.apply(valor);
    }else {
     this.onChange(valor);
    }
    return;
  }

  setDisabledState(isDisabled: boolean){
    if(this.element !== null){
      this.element.nativeElement.disabled = isDisabled;
    }
  }

}
