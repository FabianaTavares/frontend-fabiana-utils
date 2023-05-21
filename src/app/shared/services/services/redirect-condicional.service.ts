import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SecurityService } from 'src/app/core/auth/security.service';

import { PerfilEnum } from '../../models/enum/perfil.enum';
import { TipoRedirecionamentoEnum } from '../../models/enum/tipo-redirecionamento.enum';
import { TipoReqEnum } from '../../models/enum/tipo-req.enum';
import { RedirecionamentoPadraoModel } from '../../models/interface/redirecionamento-padrao.model';
import { AuthService } from './../../../core/auth/auth.service';
import { MsgSystemEnum } from './../../models/enum/msg-system.enum';
import { RedirecionamentoModel } from './../../models/interface/redirecionamento.model';
import { ReqResultModel } from './../../models/interface/req-result.model';
import { ReqService } from './req.service';

export interface RedirectOpcoes {
	//Definir se o redirect acontece na mesma aba
	novaAba?: boolean;
	//definir se o redirect acontece na mesma aba
	consultarAnalise?: boolean;

	//definir entre os tipos de redirect disponiveis
	tipoRedirect?: TipoRedirecionamentoEnum;

	//definir o roteamento customizado de acordo com o status do ...
	definirRoteamentoCompleto?: () => string;
}

@Injectable({
	providedIn: 'root'
})
export class RedirectCondicionalService {
	constructor(
		private router: Router,
		private reqService: ReqService,
		//private analiseReqService: AnaliseReqService,
		private secService: SecurityService,
		private authService: AuthService,
		private toast: ToastrService
	) {}

	private rotaBasePorTipo(tipo: TipoReqEnum) {
		const pathPadrao = this.recuperarPathPrincipal();
		switch (tipo) {
			case TipoReqEnum.ADMIN:
				return `${pathPadrao}/admin/`;
			case TipoReqEnum.COMUN:
				return `${pathPadrao}/comun/`;
		}
		return null;
	}

	private recuperarPathPrincipal() {
		if (this.secService.perfilLogado([PerfilEnum.PERFIL_ADMIN])) {
			return '/painel-admin';
		}
		return '/requerimentos';
	}

	private consultarAnalise(idreq: number): boolean {
		//return this.analiseReqService.getInfoAnalise(idreq).toPromise();
		console.log(idreq);
		return true;
	}

	private recuperarOpcaoPadrao(opcoes: RedirectOpcoes): RedirectOpcoes {
		if (opcoes) {
			if (opcoes.novaAba === null || opcoes.novaAba === undefined) {
				opcoes.novaAba = false;
			}
			if (!opcoes.tipoRedirect) {
				opcoes.tipoRedirect = TipoRedirecionamentoEnum.PESQUISAR;
			}
		} else {
			return {
				novaAba: false,
				tipoRedirect: TipoRedirecionamentoEnum.PESQUISAR,
				consultarAnalise: false
			};
		}
		return opcoes;
	}

	async direcionarReq(req: ReqResultModel, opcoes?: RedirectOpcoes): Promise<string> {
		opcoes = this.recuperarOpcaoPadrao(opcoes);
		const rotaBase = this.rotaBasePorTipo(<TipoReqEnum>req.tipo);
		const redirectModelo: RedirecionamentoModel = {
			req,
			userLogin: this.authService.getUserLogin()
		};

		if (opcoes.definirRoteamentoCompleto) {
			return opcoes.definirRoteamentoCompleto();
		}
		if (opcoes.consultarAnalise) {
			//  redirectModelo.req = await this.consultarAnalise(req.id).catch(() => {
			return '';
			//});
		}

		const rotaModelo = RedirecionamentoPadraoModel[opcoes.tipoRedirect](redirectModelo);
		if (!rotaModelo) {
			this.toast.warning(MsgSystemEnum.INDEFERIDO);
			return;
		}

		const rotaFinal = `${rotaBase}${rotaModelo}/${req.id}`;

		this.executarRoteamento(rotaFinal, opcoes);
	}

	private executarRoteamento(rota: string, opcoes: RedirectOpcoes) {
		if (opcoes.novaAba) {
			window.open(rota, '_blank');
		} else {
			this.router.navigate([rota]);
		}
	}

	direcionarRequerimentoPorId(idReq: number, opcoes?: RedirectOpcoes): void {
		this.reqService.getInfoBasicas(idReq).subscribe(info =>
			this.direcionarReq(
				{
					id: idReq,
					status: info.status,
					tipo: info.tipo,
					data: info.data
				},
				this.recuperarOpcaoPadrao(opcoes)
			)
		);
	}
}
