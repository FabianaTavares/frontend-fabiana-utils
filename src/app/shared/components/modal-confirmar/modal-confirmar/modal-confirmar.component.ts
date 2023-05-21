import { Component, EventEmitter, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-modal-confirmar',
	templateUrl: './modal-confirmar.component.html',
	styleUrls: ['./modal-confirmar.component.scss']
})
export class ModalConfirmarComponent implements OnInit {
	mensagem: string;
	txtBtnNao: 'Não';
	txtBtnSim: 'Sim';
	confirmarCiente: false;
	confirmarEvt: EventEmitter<boolean> = new EventEmitter();
	checkControl: UntypedFormControl;

	constructor(private modalRef: BsModalRef) {}

	ngOnInit() {
		this.validaEstouCiente();
	}

	validaEstouCiente() {
		if (this.confirmarCiente) {
			this.checkControl = new UntypedFormControl(false, [Validators.requiredTrue]);
		}
	}

	confirmar() {
		if (!this.confirmarCiente) {
			this.confirmarEvt.emit();
			this.fecharModal();
		} else {
			if (this.checkControl.valid) {
				this.confirmarEvt.emit();
				this.fecharModal();
			}
		}
	}

	fecharModal() {
		this.modalRef.hide();
	}
}
