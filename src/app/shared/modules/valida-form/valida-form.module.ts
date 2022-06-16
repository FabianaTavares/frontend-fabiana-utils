import { ValidaFormService } from './service/valida-form.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ValidaFormModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ValidaFormModule,
      providers: [ValidaFormService]
    }
  }
}
