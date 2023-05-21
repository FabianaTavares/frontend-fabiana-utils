import { SessionStorageKeyEnum } from './../../shared/models/enum/session-storage-key.enum';
import { Injectable } from '@angular/core';
import { UserAuthCredentialsModel } from 'src/app/shared/models/interface/user-auth-credential.model';
import { AppSessionStorageService } from './app-session-storage.service';
import jwtDecode from 'jwt-decode';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	userAuth: UserAuthCredentialsModel;

	constructor(private sessionService: AppSessionStorageService) {}

	isAutenticated() {
		return !!this.sessionService.recuperarValor(SessionStorageKeyEnum.AUTH_KEY);
	}

	setUserLogin(autenticacaoModel: UserAuthCredentialsModel) {
		this.userAuth = autenticacaoModel;
		this.sessionService.salvarUsuario(SessionStorageKeyEnum.AUTH_KEY, this.userAuth);
	}

	getUserLogin(): UserAuthCredentialsModel {
		const usuario = this.sessionService.recuperarValor<UserAuthCredentialsModel>(SessionStorageKeyEnum.AUTH_KEY);
		if (usuario) {
			usuario.tokenModel = jwtDecode(usuario.token);
		}
		return usuario;
	}

	logout(): boolean {
		this.sessionService.limparSessao();
		return true;
	}
}
