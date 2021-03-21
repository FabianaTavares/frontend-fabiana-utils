import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { SessionStorageKeyEnum } from 'src/app/shared/models/enum/session-storage-key.enum';
import { UserAuthCredentialsModel } from 'src/app/shared/models/interface/user-auth-credential.model';

@Injectable({
  providedIn: 'root'
})
export class AppSessionStorageService {

  recuperarValor<T>(chave: SessionStorageKeyEnum): T {
    if(sessionStorage.getItem(chave) != null){
      return JSON.parse(
        atob(sessionStorage.getItem(chave) || null)
      );
    }
    return null;
  }

  salvarValor(chave: SessionStorageKeyEnum, objeto: any){
    if(chave && objeto){
      const valor = btoa(typeof objeto === 'object' ? JSON.stringify(objeto) : String(objeto));
      sessionStorage.setItem(chave, valor)
    }
  }

  salvarUsuario(chave: SessionStorageKeyEnum, objeto: UserAuthCredentialsModel){
    if(chave && objeto){
      this.salvarValor(chave, objeto);
    }
  }

  recuperarUsuario(): any {
    const usuario = this.recuperarValor<UserAuthCredentialsModel>(SessionStorageKeyEnum.AUTH_KEY);
    if(usuario !== null){
      return usuario.tokenModel = jwtDecode(usuario.token);
    }else{
      return null;
    }
  }

  limparValores(chave: SessionStorageKeyEnum[]){
    chave.forEach(key => {
      sessionStorage.removeItem(key);
    })
  }

  limparSessao(){
    sessionStorage.clear();
  }

}
