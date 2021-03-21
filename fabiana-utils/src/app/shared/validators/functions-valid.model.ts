import { AbstractControl } from "@angular/forms";
import { ValidacaoUtils } from "./cpf-cnpj-valid.model";


export const ValidacaoFormsValidators = {

  validaEmail: (control: AbstractControl) => {

    return null;
  },

  validaTelefone: (control: AbstractControl) => {
    return null;
  },

  validaCpfCnpj: (control: AbstractControl) => {
     if(control.value != null){
       if(ValidacaoUtils.validaCpf(control.value) || ValidacaoUtils.validaCnpj(control.value)){
         return null
       }
     }
     return {cpfCnpj: true };
  },

  validaCep: (control: AbstractControl) => {
    if(control.value != null){
      if(String(control.value).length >= 8){
        return null;
      }
    }
    return { cep: true };
  },

  validaMaiorQueZero: (control: AbstractControl) => {
    if(control.value !== null){
      if(Number(control.value) > 0) {
        return null;
      }
    }
    return { maiorQueZero: true };
  }

};
