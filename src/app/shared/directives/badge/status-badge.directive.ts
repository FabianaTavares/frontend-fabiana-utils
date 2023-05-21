import { SimNaoEnum, SimNaoEnumMensagemBadge } from './../../models/enum/sim-nao.enum';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[appStatusBadge]'
})
export class StatusBadgeDirective {
	@Input('appStatusBadge') simNaoEnum: SimNaoEnum;

	constructor(private elementRef: ElementRef) {}

	ngOnInit(): void {
		if (this.simNaoEnum) {
			this.elementRef.nativeElement.classList.add('badge');
			this.elementRef.nativeElement.classList.add(`badge-${SimNaoEnumMensagemBadge[this.simNaoEnum] || 'secondary'}`);
		}
	}
}
