import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'splitComma'
})
export class SplitCommaPipe implements PipeTransform {
	transform(value: string, limit: number = 25, completeWords: boolean = false, ellipsis: string = '...'): string {
		if (completeWords) {
			limit = value.substr(0, limit).lastIndexOf(' ');
		}
		return value.length > limit ? value.substr(0, limit) + ellipsis : value;
	}
}
