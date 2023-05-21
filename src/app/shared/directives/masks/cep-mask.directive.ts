import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as StringMask from 'string-mask';

@Directive({
	selector: '[appCepMask]',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CepMaskDirective),
			multi: true
		}
	]
})
export class CepMaskDirective implements ControlValueAccessor {
	onTouched: any;
	onChange: any;
	value: any;
	private digitosEspeciais = [8, 37, 39, 4, 17];
	private regexCep: StringMask;

	constructor(private element: ElementRef) {
		this.regexCep = new StringMask('00000-000');
	}

	writeValue(value: any): void {
		if (value != null) {
			if (value.indexOf('-') === -1) {
				this.element.nativeElement.value = this.regexCep.apply(value);
			}
		}
		this.value = value;
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	@HostListener('keyup', ['$event'])
	onKeyup($event: any) {
		if (!this.digitosEspeciais.includes($event.keyCode)) {
			this.aplicarMascara($event);

			return;
		}
	}

	aplicarMascara(event) {
		const valor = this.getValorAbsoluto(event.targe.value);
		this.onChange(valor);
		event.target.value = this.regexCep.apply(valor);
		return;
	}

	private getValorAbsoluto(targetValue: string): string {
		return targetValue.replace(/\D/g, '');
	}

	@HostListener('keydown', ['$event'])
	onKeydown($event: any) {
		if (!this.digitosEspeciais.includes($event.keyCode)) {
			this.aplicarMascara($event);

			return;
		}
	}
}
