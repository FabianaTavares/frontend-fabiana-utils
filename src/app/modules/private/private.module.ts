import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PrivateGuardService } from './guards/private-guard.service';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ProjetoUtilsAdminComponent } from './components/projeto-utils-admin/projeto-utils-admin.component';
import { SistemaModalModule } from 'src/app/shared/modules/sistema-modal/sistema-modal.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
	declarations: [AdminComponent, ProjetoUtilsAdminComponent],
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
	providers: [PrivateGuardService]
})
export class PrivateModule {}
