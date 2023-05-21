import { AfterViewInit, Component, ContentChild, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { InputContainerDefault } from './models/input-container-const.model';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnDestroy, AfterViewInit {
	@Input() exibirApenasValidadors: string[] = []; //agrupadas
	@Input() mensagemToValidators: []; //individuais
	@Input() mensagemDeErro: string;
	@Input() classContainer: string; //classe css customizada para o container do component.

	@Input() exibirClose = false;

	@ContentChild(FormControlName)
	private input: FormControlName;

	@Input() canValidTouch = false;
	@Input() canValidDirty = true;

	@Input() targetLabel: string; //id de um label caso utilize um labeo cujo [for] não for igual ao formControlName.
	@Input() targetId: string; // o id de um input para recuperar o elemento no DOM.

	private elementRef: HTMLElement;
	private label: HTMLElement;

	subscriptions: Subscription[] = [];

	mensagemErroAtual: string;

	constructor() {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		if (this.input === undefined) {
			throw new Error('<app-input> precisa ser utilizado com uma diretiva formControlName');
		}

		this.carregarElementos();
		this.subscriptions = this.subscribers();
	}

	private carregarElementos(): any {
		const labelSelect = this.targetLabel ? this.targetLabel : this.input.name;
		const seletor = this.targetId ? `*[id=${this.targetId}]` : `*[formControlName=${this.input.name}]`;
		this.elementRef = document.querySelector(seletor);
		if (!this.elementRef) {
			return;
		}

		const lbSeletor = `*[for=${labelSelect}]`;
		const idFor = `*[for=${this.elementRef.id}]`;

		this.label = this.getLabelElem(lbSeletor) || this.getLabelElem(idFor);
	}

	private subscribers(): Subscription[] {
		return [
			this.input.statusChanges.pipe(debounceTime(300)).subscribe(() => {
				this.verificarEstado();
			})
		];
	}

	private verificarEstado(): any {
		this.mensagemErroAtual = null;
		this.atribuirMensagem();
		this.atribuirEstado();
	}

	private atribuirMensagem(): void {
		if (this.isInvalid()) {
			const errorName = Object.keys(this.input.errors)[0];
			this.mensagemErroAtual = this.definirMensagem(errorName);
		}
	}

	private isInvalid(): boolean {
		if (this.input.errors != null) {
			const errorName = Object.keys(this.input.errors)[0];
			if (this.exibirApenasValidadors.length > 0) {
				return this.exibirApenasValidadors.includes(errorName);
			} else {
				return this.input.invalid;
			}
		}

		return false;
	}

	private getLabelElem(selector: string): HTMLElement {
		if (this.targetLabel) {
			return document.getElementById(this.targetLabel);
		}

		return document.querySelector(selector);
	}

	private atribuirEstado(): any {
		if (this.isInvalid()) {
			this.addClass(this.elementRef, 'is-invalid');
			this.addClass(this.label, 'label-error');
		} else {
			this.removeClass(this.elementRef, 'is-invalid');
			this.removeClass(this.label, 'label-error');
		}
	}

	private definirMensagem(validatorName: string): string {
		if (this.mensagemToValidators != null) {
			return this.getMensagemCustomizada(validatorName);
		}
		return this.getDefaultMessage(validatorName);
	}

	private getMensagemCustomizada(validatorName: string): any {
		try {
			const msg = this.mensagemToValidators.find(key => {
				return key[validatorName];
			})[validatorName];
			if (msg != null) {
				return msg;
			}
		} catch (error) {
			return this.getDefaultMessage(validatorName);
		}
	}

	private getDefaultMessage(validatorName: string): string {
		const msg = InputContainerDefault[0][validatorName];
		if (msg != null) {
			switch (validatorName) {
				case 'minlength':
					return msg.replace('{VALUE}', this.input.errors.minlength.requiredLength || 'NOT_CONTENT');
				case 'maxlength':
					return msg.replace('{VALUE}', this.input.errors.maxlength.requiredLength || 'NOT_CONTENT');
				default:
					return msg;
			}
		}
	}

	private addClass(element, classStr: string) {
		if (element != null && !element.classList.contains(classStr)) {
			element.classList.add(classStr);
		}
	}

	private removeClass(element, classStr: string) {
		if (element != null && element.classList.contains(classStr)) {
			element.classList.remove(classStr);
		}
	}

	ngOnDestroy(): void {
		if (this.subscriptions) {
			this.subscriptions.forEach(sub => sub.unsubscribe());
		}
	}
}
