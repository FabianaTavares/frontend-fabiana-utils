import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { PrivateGuardService } from './guards/private-guard.service';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ProjetoUtilsAdminComponent } from './components/projeto-utils-admin/projeto-utils-admin.component';
import { SistemaModalModule } from 'src/app/shared/modules/sistema-modal/sistema-modal.module';


@NgModule({
  declarations: [
    AdminComponent,
    ProjetoUtilsAdminComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    ComponentsModule,
    PipesModule,
    TooltipModule.forRoot(),
    DirectivesModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'success', // set defaults here
      cancelButtonType: 'danger',
      confirmText: 'Sim',
      cancelText: 'Não'
    }),
    SistemaModalModule

  ],
  providers: [
    PrivateGuardService
  ]
})
export class PrivateModule { }
