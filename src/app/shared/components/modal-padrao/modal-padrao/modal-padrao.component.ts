import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit, Output, TemplateRef, ViewChild, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-modal-padrao',
	templateUrl: './modal-padrao.component.html',
	styleUrls: ['./modal-padrao.component.scss']
})
export class ModalPadraoComponent implements OnInit {
	@Input() public titulo: string;
	@Input() public mensagem: string;
	@Input() public dado: any;
	@Input() public txtBtnSim = 'Sim';
	@Input() public txtBtnNao = 'Não';
	@Input() public esconderCampoSim: boolean;
	@Input() public esconderCampoNao: boolean;

	bsModalRef: BsModalRef;
	@ViewChild('template') templateRef: TemplateRef<any>;

	@Output() readonly confirm: EventEmitter<any> = new EventEmitter();
	@Output() readonly deny: EventEmitter<any> = new EventEmitter();

	constructor(private modalService: BsModalService) {}

	ngOnInit(): void {}

	mostrarModal() {
		this.bsModalRef = this.modalService.show(this.templateRef, { class: 'modal-dialog-centered' });
	}

	fecharModal() {
		this.deny.emit();
		this.bsModalRef.hide();
	}

	confirmar(valor?: any) {
		if (valor) {
			this.confirm.emit(valor);
		} else {
			this.confirm.emit();
		}
		this.bsModalRef.hide();
	}
}
