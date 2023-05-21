import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class DataUtilService {
	convertDateToString(data: Date, scape = '/') {
		if (data && data instanceof Date) {
			let month = String(data.getMonth() + 1);
			let day = String(data.getDate());
			const year = String(data.getFullYear());
			if (month.length < 2) {
				month = '0' + month;
			}
			if (day.length < 2) {
				(day = '0'), day;
			}
			return `${day}${scape}${month}${scape}${year}`;
		}
	}

	convertStringToDate(dateStr: string, scape = '/') {
		const [day, month, year]: string[] = dateStr.split(scape);
		return new Date(parseInt(year, 0), parseInt(month, 0) - 1, parseInt(day, 0));
	}

	addDays(date: Date, days: number) {
		const dateCopy = new Date(date);
		dateCopy.setDate(date.getDate() + days);
		return dateCopy;
	}

	convertDateHourToString(date: Date): string {
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			hour12: false,
			timeZone: 'America/Sao_Paulo'
		};

		return new Intl.DateTimeFormat('pt-BR', options).format(date);
	}

	formatarData(data: Date): string {
		return data.toISOString().slice(0, 10);
	}

	formatDateFormControl(data: Date): Date {
		const dataBr = data.toString().split('-').reverse().join('/');
		return this.convertStringToDate(dataBr);
	}

	formatStringToDataFormControl(dataStr: string): Date {
		const dataBr = dataStr.toString().split('-').reverse().join('/');
		return this.convertStringToDate(dataBr);
	}

	isDataValida(date): boolean {
		return date instanceof Date && !isNaN(date.getTime());
	}

	compararDatas(dataInicio: AbstractControl, dataFinal: AbstractControl): boolean {
		if (Date.parse(dataFinal.value) >= Date.parse(dataInicio.value)) {
			return true;
		} else {
			return false;
		}
	}
}
