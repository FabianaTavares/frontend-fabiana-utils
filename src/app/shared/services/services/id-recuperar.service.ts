import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ParametroRotaEnum } from '../../models/enum/parametro-rota.enum';

@Injectable({
	providedIn: 'root'
})
export class IdRecuperarService {
	idRecuperar$: Subject<number> = new Subject();
	private idRecuperarAtual: number;

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			this.idRecuperarAtual = this.recuperarParametroId(this.activatedRoute);
			this.setIdRecuperar(this.idRecuperarAtual);
		});
	}

	getIdRecuperar(): number {
		return this.idRecuperarAtual ? this.idRecuperarAtual : this.recuperarParametroId(this.activatedRoute);
	}

	private setIdRecuperar(idRecuperar: number) {
		this.idRecuperar$.next(idRecuperar);
	}

	private recuperarParametroId(actRouter: ActivatedRoute) {
		if (actRouter && actRouter.children && actRouter.children.length) {
			const actRouterAtual = actRouter.children.find(router => router.snapshot.params['id']);
			return actRouterAtual != null ? actRouterAtual.snapshot.params['id'] : this.recuperarParametroId(actRouter.children[0]);
		}
	}

	recuperarParametro(parametro: ParametroRotaEnum, actRouter?: ActivatedRoute) {
		const rotaSelecionada = actRouter ? actRouter : this.activatedRoute;
		if (rotaSelecionada && rotaSelecionada.children && rotaSelecionada.children.length) {
			const actRouterAtual = rotaSelecionada.children.find(router => router.snapshot.params[parametro]);
			return actRouterAtual != null
				? actRouterAtual.snapshot.params[parametro]
				: this.recuperarParametro(parametro, rotaSelecionada.children[0]);
		}
	}

	recuperarRouterData(dataNome: ParametroRotaEnum, actRouter?: ActivatedRoute) {
		const rotaSelecionada = actRouter ? actRouter : this.activatedRoute;
		if (rotaSelecionada && rotaSelecionada.children.length) {
			const actRouterAtual = rotaSelecionada.snapshot.params[dataNome]
				? rotaSelecionada
				: rotaSelecionada.children && rotaSelecionada.children.length
				? rotaSelecionada.children.find(router => router.snapshot.data[dataNome])
				: null;
			return actRouterAtual ? actRouterAtual.snapshot.data[dataNome] : this.recuperarParametro(dataNome, rotaSelecionada.children[0]);
		}
	}
}
