import { UserAuthCredentialsModel } from './../../shared/models/interface/user-auth-credential.model';
import { PerfilEnum } from './../../shared/models/enum/perfil.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  userAuthCredencial: UserAuthCredentialsModel;

  constructor() { }

  perfilLogado(perfil: PerfilEnum | PerfilEnum[]): boolean {
    //logica é bem grande.
    return true;
  }
}
