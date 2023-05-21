import { Pipe, PipeTransform } from '@angular/core';
import * as StringMask from 'string-mask';

@Pipe({
	name: 'cpfCnpjTranslate'
})
export class CpfCnpjPipe implements PipeTransform {
	regexApplyCpf = new StringMask('000.000.000-00');
	regexApplyCnpj = new StringMask('000.000.000/0000-00');

	transform(value: any): any {
		if (value) {
			if (value.length === 11) {
				return this.regexApplyCpf.apply(value);
			} else if (value.length === 14) {
				return this.regexApplyCnpj.apply(value);
			} else {
				return value;
			}
		}
	}
}
