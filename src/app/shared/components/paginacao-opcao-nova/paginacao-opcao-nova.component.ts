import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination/dist/pagination-instance';

import { PaginacaoNova } from '../../models/class/paginacao-nova';

@Component({
	selector: 'app-paginacao-opcao-nova',
	templateUrl: './paginacao-opcao-nova.component.html',
	styleUrls: ['./paginacao-opcao-nova.component.scss']
})
export class PaginacaoOpcaoNovaComponent implements OnInit {
	@Input() totalItemsNovo: number;
	@Input() totalItemsPerPage: 10;
	@Input() ItemsPerPageOptions: 10;
	@Input() currentPage: 0;

	@Output() consultarPaginaNova: EventEmitter<PaginacaoNova> = new EventEmitter();

	paginacaoModel: PaginacaoNova = new PaginacaoNova();
	collection = [];
	public maxSize = 7;
	public config: PaginationInstance = {
		id: 'custom',
		itemsPerPage: 10,
		currentPage: 0,
		totalItems: 10
	};

	ngOnInit(): void {
		this.paginacaoModel.id = this.config.id;
		this.paginacaoModel.currentPage = this.config.currentPage;
		this.paginacaoModel.totalItemsPerPage = this.config.itemsPerPage;
		this.paginacaoModel.totalItemsNovo = this.config.totalItems;
	}

	onPageChange(event) {
		this.paginacaoModel.currentPage = event - 1;
		this.config.currentPage = event;
		if (this.paginacaoModel.currentPage === -1) {
			this.paginacaoModel.currentPage = 0;
			this.config.currentPage = 0;
		}
		this.emiteEvento();
	}

	onPerPageOptionChange(event) {
		this.paginacaoModel.ItemsPerPageOptions = event;
		this.config.itemsPerPage = event;
		this.collection
			.slice((this.config.currentPage - 1) * this.config.itemsPerPage)
			.slice(this.config.currentPage * this.config.itemsPerPage);
		this.emiteEvento();
	}

	emiteEvento() {
		this.paginacaoModel.totalItemsNovo = this.totalItemsNovo;
		this.consultarPaginaNova.emit(this.paginacaoModel);
	}
}
