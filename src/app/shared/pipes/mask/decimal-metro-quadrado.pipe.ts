import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'decimalMetroQuadrado'
})
export class DecimalMetroQuadradoPipe implements PipeTransform {
	constructor(private decimalPipe: DecimalPipe) {}

	transform(value: string): unknown {
		if (value) {
			return this.decimalPipe.transform(value, '1.2-2') + ' m²';
		} else {
			return '-';
		}
	}
}
