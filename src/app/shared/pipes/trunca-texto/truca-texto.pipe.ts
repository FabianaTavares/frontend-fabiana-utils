import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'trucaTexto'
})
export class TrucaTextoPipe implements PipeTransform {
	transform(value: any, tamanho: any): string {
		return value.substring(0, Math.min(tamanho, value.length));
	}
}
