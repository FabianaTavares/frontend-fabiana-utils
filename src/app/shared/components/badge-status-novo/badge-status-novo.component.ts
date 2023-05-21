import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-badge-status-novo',
	templateUrl: './badge-status-novo.component.html',
	styleUrls: ['./badge-status-novo.component.scss']
})
export class BadgeStatusNovoComponent implements OnInit {
	@Input() codigoStatus = '';
	@Input() qtdStatus = 0;
	@Input() btnClicavel = false;
	@Input() filtroRealizado = false;

	className = 'badge-message';

	constructor() {}

	ngOnChanges(changes: SimpleChanges) {
		this.className = this.getNgClass(this.btnClicavel, this.getStatus, this.qtdStatus, this.filtroRealizado);
	}

	ngOnInit(): void {}

	get getStatus() {
		switch (this.codigoStatus) {
			case 'A':
				return 'aprovado';
			case 'R':
				return 'reprovado';
			case 'EA':
				return 'em-analise';
			case 'C':
				return 'cancelado';
			default:
				return '';
		}
	}

	getNgClass(btnClicavel, getStatus, qtdStatus, filtroRealizado) {
		if (btnClicavel === false) {
			return 'badge-message badge-message-' + getStatus;
		} else if (btnClicavel === true && filtroRealizado === false && qtdStatus > 0) {
			return 'badge-message badge-message-hover-' + getStatus;
		} else if (btnClicavel === true && filtroRealizado === true && qtdStatus > 0) {
			return 'badge-message badge-message-filtro-' + getStatus;
		} else if (btnClicavel === true && qtdStatus === 0) {
			return 'badge-message badge-message-hover-borda-fraca-' + getStatus;
		} else {
			return 'badge-message badge-message-' + getStatus;
		}
	}
}
