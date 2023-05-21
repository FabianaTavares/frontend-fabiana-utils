import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'ativoInativo'
})
export class AtivoInativoPipe implements PipeTransform {
	transform(value: string | boolean): any {
		if (typeof value === 'string') {
			return value === 'A' ? 'Ativo' : 'Inativo';
		}
	}
}
