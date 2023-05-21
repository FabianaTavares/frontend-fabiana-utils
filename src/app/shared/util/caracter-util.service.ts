import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CaracterUtilService {
	removeCaracterCurrency(valorFormatado: string): number {
		if (valorFormatado && valorFormatado.length > 0) {
			return parseInt(valorFormatado.replace(/[\\.,]/g, '')) / 100.0;
		} else {
			return 0.0;
		}
	}
}
