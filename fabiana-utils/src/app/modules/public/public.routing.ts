import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicGuardService } from 'src/app/core/guards/public-guard.service';

const routes: Routes = [
  {
    path: 'aplicacao-utils',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [PublicGuardService]
      }
    ],
    data: {
      titulo: 'Home'
    },
    canActivate: [PublicGuardService],
    canActivateChild: [PublicGuardService],
    canLoad: [PublicGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
