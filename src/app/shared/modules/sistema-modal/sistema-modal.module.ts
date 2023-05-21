import { SistemaModalService } from './services/sistema-modal.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
	declarations: [],
	imports: [CommonModule, ModalModule.forRoot()]
})
export class SistemaModalModule {
	static forRoot(): ModuleWithProviders<SistemaModalModule> {
		return {
			ngModule: SistemaModalModule,
			providers: [SistemaModalService]
		};
	}
}
