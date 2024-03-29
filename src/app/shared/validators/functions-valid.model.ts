import { AbstractControl } from '@angular/forms';
import { ValidacaoUtils } from './cpf-cnpj-valid.model';

export const ValidacaoFormsValidators = {
	validaEmail: (control: AbstractControl): object => {
	/* 	if(incluir regex de email aqui .test(control.value)){
      return null;
    }
    return { mEmail: true} */
		console.log(control.value);
		return { mEmail: false };
	},

	validaTelefone: (control: AbstractControl): object => {
		if (String(control.value).length > 0) {
			if (!/\d{10,11}/g.test(control.value)) {
				return { telefone: true };
			}
		}
		return null;
	},

	validaCpfCnpj: (control: AbstractControl): object => {
		if (control.value != null) {
			if (ValidacaoUtils.validaCpf(control.value) || ValidacaoUtils.validaCnpj(control.value)) {
				return null;
			}
		}
		return { cpfCnpj: true };
	},

	validaCep: (control: AbstractControl): object => {
		if (control.value != null) {
			if (String(control.value).length >= 8) {
				return null;
			}
		}
		return { cep: true };
	},

	validaMaiorQueZero: (control: AbstractControl): object => {
		if (control.value !== null) {
			if (Number(control.value) > 0) {
				return null;
			}
		}
		return { maiorQueZero: true };
	}
};
