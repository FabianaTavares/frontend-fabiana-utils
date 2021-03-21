import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CodigoRecuperarService {

  codigoRecuperar$: Subject<string> = new Subject();
  private codigoRecuperadoAtual: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.codigoRecuperadoAtual = this.recuperaParametroId(this.activatedRoute);
        this.setCodigoUsuario(this.codigoRecuperadoAtual);
      })
    }

  getCodigoUsuario(): string {
    return this.codigoRecuperadoAtual ? this.codigoRecuperadoAtual : this.recuperaParametroId(this.activatedRoute);
  }

  private setCodigoUsuario(CodigoUsuario: string){
    this.codigoRecuperar$.next(CodigoUsuario);
  }

  private recuperaParametroId(actRouter: ActivatedRoute){
    if(actRouter && actRouter.children && actRouter.children.length){
      const actRouterAtual = actRouter.children.find(router => router.snapshot.params['codigo']);
      return actRouterAtual != null ? actRouterAtual.snapshot.params['codigo'] : this.recuperaParametroId(actRouter.children[0]);
    }
  }
}
