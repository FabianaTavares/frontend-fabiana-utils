import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedServicesService } from './services/shared-services.service';
import { CodigoRecuperarService } from './services/codigo-recuperar.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServicesModule,
      providers: [
        SharedServicesService,
        CodigoRecuperarService
      ]
    }
  }
}
