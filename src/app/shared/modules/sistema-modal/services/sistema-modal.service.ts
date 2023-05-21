import { ModalConfirmarComponent } from './../../../components/modal-confirmar/modal-confirmar/modal-confirmar.component';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ModalInformativoComponent } from 'src/app/shared/components/modal-informativo/modal-informativo.component';

@Injectable({
	providedIn: 'root'
})
export class SistemaModalService {
	modais: Map<string, BsModalRef> = new Map<string, BsModalRef>();

	constructor(private bsModalService: BsModalService, private router: Router) {
		this.cadastrarRotas();
	}

	private cadastrarRotas() {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			this.ocultarTodos();
		});
	}

	ocultarTodos() {
		if (this.bsModalService.getModalsCount() > 0) {
			this.modais.forEach((value, key) => {
				value.hide();
				this.modais.delete(key);
			});
		}
	}

	/**
	 * exibir modal na aplicação.
	 * @param id ID do modal para exibição e controle.
	 * @param content Conteúdo do modal
	 * @param options Opções para exibição do modal
	 */
	exibir(id: string, content: any, options?: ModalOptions) {
		const modalRef: BsModalRef = this.bsModalService.show(content, {
			animated: options.animated || true,
			backdrop: options.backdrop || true,
			ignoreBackdropClick: options.ignoreBackdropClick || true,
			class: options.class,
			focus: options.focus || true,
			initialState: options.initialState,
			keyboard: options.keyboard || false,
			show: options.show
		});
		this.modais.set(id, modalRef);
	}

	/**
	 * Metodo utilizado para exibir um modal na aplicação.
	 * @param id ID do modal para exibição e controle.
	 * @param content Conteudo do modal
	 * @param options Opções para exibição do modal
	 */
	exibirModal(content: any, options?: ModalOptions) {
		this.bsModalService.show(content, {
			animated: options.animated || true,
			backdrop: options.backdrop || true,
			ignoreBackdropClick: options.ignoreBackdropClick || true,
			class: options.class,
			focus: options.focus || true,
			initialState: options.initialState,
			keyboard: options.keyboard || false,
			show: options.show
		});
	}

	/**
	 * Metodo utilizado para ocultar um modal em exibição.
	 * @param id ID do modal que deseja ocultar
	 */
	ocultar(id: string) {
		if (this.modais.has(id)) {
			this.modais.get(id).hide();
			this.modais.delete(id);
		}
	}

	/**
	 * Crie um modal de cancelar/confirmar com a mensagem customizada.
	 * @returns Observable<boolean> caso o usuário clique em confirmar.
	 */
	openDialog(mensagem?: string, confirmarCliente = false, titulo?: string): Observable<boolean> {
		const initialState = { mensagem: mensagem, confirmarCliente: confirmarCliente, titulo: titulo };

		this.exibir(
			'MODAL_CONFIRM',
			ModalConfirmarComponent,
			Object.assign({
				class: 'modal-dialog-centered',
				initialState
			})
		);
		return this.modais.get('MODAL_CONFIRM').content.confirmarEvt;
	}

	open(component, initialState?: Object) {
		return this.bsModalService.show(component, {
			class: 'modal-dialog-centered modal-lg',
			initialState
		});
	}

	openModalInfo(mensagem: string): Observable<boolean> {
		this.exibir(
			'MODAL_INFO',
			ModalInformativoComponent,
			Object.assign({
				initialState: {
					mensagem
				}
			})
		);
		return this.modais.get('MODAL_INFO').content.confirmarEvt;
	}
}
