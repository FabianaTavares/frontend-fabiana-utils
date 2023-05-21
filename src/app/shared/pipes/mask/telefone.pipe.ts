import { Pipe, PipeTransform } from '@angular/core';
import * as StringMask from 'string-mask';

@Pipe({
	name: 'telefone'
})
export class TelefonePipe implements PipeTransform {
	regexTelefone10 = new StringMask('(00) 0000-0000');
	regexTelefone11 = new StringMask('(00) 00000-0000');

	transform(value: any): any {
		if (value) {
			if (value.length === 10) {
				return this.regexTelefone10.apply(value);
			} else if (value.length === 11) {
				return this.regexTelefone11.apply(value);
			} else {
				return value;
			}
		}
	}
}
