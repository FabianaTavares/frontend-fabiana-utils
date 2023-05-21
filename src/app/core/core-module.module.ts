import { AuthService } from './auth/auth.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../app.interceptors';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			multi: true,
			useClass: InterceptorService
		}
	]
})
export class CoreModule {
	static forRoot(): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: [AuthService]
		};
	}
}
