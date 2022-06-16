import { DataUtilService } from './../util/data-util.service';
import { NgModule } from '@angular/core';
import { StatusBadgeDirective } from './badge/status-badge.directive';
import { CepMaskDirective } from './masks/cep-mask.directive';
import { CpfCnpjMaskDirective } from './masks/cpf-cnpj-mask.directive';
import { DataMaskDirective } from './masks/data-mask.directive';
import { DecimalMaskDirective } from './masks/decimal-mask.directive';
import { TelefoneMaskDirective } from './masks/telefone-mask.directive';


@NgModule({
  declarations: [
    StatusBadgeDirective,
    CepMaskDirective,
    CpfCnpjMaskDirective,
    DataMaskDirective,
    DecimalMaskDirective,
    TelefoneMaskDirective,
  ],
  exports: [
    StatusBadgeDirective,
    CepMaskDirective,
    CpfCnpjMaskDirective,
    DataMaskDirective,
    DecimalMaskDirective,
    TelefoneMaskDirective,
  ],
  providers: [
    DataUtilService
  ],
  imports: [
    //CommonModule
  ]
})
export class DirectivesModule { }
