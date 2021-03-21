import { AuthService } from './../../../core/auth/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrivateGuardService {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(){
    if(this.auth.isAutenticated()){
      return this.auth.isAutenticated();
    }

    this.router.navigate(['aplicacao/login']);
    return false;
  }

}
