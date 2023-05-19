import { environment } from './../../../../../environments/environment';
import { MsgSystemEnum } from './../../../models/enum/msg-system.enum';
import { Injectable } from '@angular/core';
import { UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { ValidaFormOption } from '../model/valida-form-option.model';

@Injectable({
  providedIn: 'root'
})
export class ValidaFormService {

  private listarErros = new Subject<string[]>();
  $listarErros = this.listarErros.asObservable();

  constructor() { }

  validarFormulario(formObj: UntypedFormGroup | UntypedFormArray, option?: Partial<ValidaFormOption>, parentErrors?: Array<any>){
    const errors = parentErrors || [];
    let elementoFocus: HTMLElement;
    let formArray;

    option = option || this.getOptionPadrao();
    if(formObj != null && formObj.invalid){

      Object.keys(formObj.controls).forEach(nomeDoControle => {
        const controle = formObj.get(nomeDoControle);
        if(controle instanceof UntypedFormGroup || controle instanceof UntypedFormArray){
          if(controle instanceof UntypedFormArray){
            option.grupoPai = nomeDoControle;
          }
          option.nomeDoGrupo = nomeDoControle;
          this.validarFormulario(controle, option, errors);
        }

        if(controle.invalid && !(controle instanceof UntypedFormGroup)){
          let elemento;

          let seletor;

          if(controle.parent.parent && controle.parent.parent instanceof UntypedFormArray){
            seletor = `*[formArrayName=${option.grupoPai}]`;
            formArray = document.querySelector(seletor);
            elemento = formArray;
          }else {
            seletor = option.nomeDoGrupo != null
                  ? `*[formArrayName=${option.grupoPai}] *[formControlName=${nomeDoControle}]`
                  : `*[formControlName=${nomeDoControle}]`;

            elemento = document.querySelector(seletor) as HTMLElement ||
            document.querySelector(`*[id=${nomeDoControle}]`) as HTMLElement;
          }

          let mensagem = '';

          if(elemento === null){
            if(!environment.production){
              console.error(MsgSystemEnum.A006.replace('{VALUE}',
              nomeDoControle), `[${nomeDoControle}]`);
            }
            return;
          }

          if(!elementoFocus && !option.elementoFocus){
            elementoFocus = elemento.tagName.indexOf('-') > -1 ? elemento.querySelector('[tabindex') : elemento;

            option.elementoFocus = elementoFocus;
            setTimeout(() => elementoFocus.focus());
          }

          elemento.scrollIntoView({ behavior: 'smooth' });
          const nomeElemento = elemento.getAttribute('name') || this.recuperaValorLabel(nomeDoControle);

          if(nomeElemento === null){
            if(!environment.production){
              console.error(MsgSystemEnum.A008.replace('{VALUE}',
              nomeDoControle), `[${nomeDoControle}]`);
            }
          }

          if(controle.parent.parent && controle.parent.parent instanceof
            UntypedFormArray
            && (controle.value == null || controle.value.length === 0))
          {
              if(nomeElemento === 'Horario de Testes'){
                mensagem = MsgSystemEnum.MSG_INTERVALO_HORA_REQUIRED.replace('{Value}', nomeElemento);
              } else if (nomeElemento === 'Periodo de Consulta'){
                mensagem = MsgSystemEnum.MSG_INTERVALO_DATA_REQUIRED.replace('{Value}', nomeElemento);
              } else {
                mensagem = MsgSystemEnum.A013.replace('{VALUE}', nomeElemento);
              }
          } else if (controle.parent.parent && controle.parent.parent
            instanceof UntypedFormArray && controle.hasError('horaInicialMaior'))
          {
            mensagem = MsgSystemEnum.MSG_INATERVALO_HORA_INVALIDO;
          } else if (controle.parent.parent && controle.parent.parent
          instanceof UntypedFormArray && controle.hasError('dataInicialMaior')){
            mensagem = MsgSystemEnum.MSG_INATERVALO_DATA_INVALIDO;
          } else if (controle.parent.parent && controle.parent.parent
          instanceof UntypedFormArray && controle.hasError('dataInicialMenorAtual')){
            mensagem = MsgSystemEnum.MSG_DATA_INICIAL_MENOR_ATUAL;
          }
          else if(controle.hasError('arquivoInvalido')){
              mensagem = MsgSystemEnum.A016.replace('{VALUE}', nomeElemento);
          }
          else if(controle.hasError('cpfCnpjTamanho')){
              mensagem = MsgSystemEnum.MSG_TAMANHO_CARACTERES_CPF_CNPJ;
          }
          else {
            if(!environment.production){
              console.log(MsgSystemEnum.A010.replace('{VALUE}', JSON.stringify(controle.errors)), elemento);
            }
          }
          if(option.multiplo){
            errors.push(mensagem);
          }else {
            throw new Error(mensagem);
          }
        }
      });
      if(errors.length > 0){
        this.listarErros.next(errors);
      }
      if(!parentErrors){
        throw new Error();
      }
    }
  }

  private recuperaValorLabel(nomeDoControle: string): string {
    const seletor = `*[for=${nomeDoControle}]`;
    const elemento = document.querySelector(seletor) as HTMLElement;
    if(elemento != null){
      return elemento.innerText;
    }
    return null;
  }

  private getOptionPadrao(): Partial<ValidaFormOption> {
    return { multiplo: true };
  }

}
