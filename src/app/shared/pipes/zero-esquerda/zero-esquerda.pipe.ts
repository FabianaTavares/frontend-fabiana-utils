import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'zeroEsquerda'
})
export class ZeroEsquerdaPipe implements PipeTransform {
	public static zeroEsquerda(value: string | string[], maxSize: number): string {
		if (value) {
			value += '';
			return '0'.repeat(maxSize - value.length) + value;
		}
		return '-';
	}

	transform(value: string | string[], maxSize?: number): string {
		return ZeroEsquerdaPipe.zeroEsquerda(value, maxSize);
	}
}
