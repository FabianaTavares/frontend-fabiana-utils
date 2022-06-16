import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtivoInativoPipe } from './ativo-inativo/ativo-inativo.pipe';
import { DataSemHoraPipe } from './data-sem-hora/data-sem-hora.pipe';
import { CpfCnpjPipe } from './mask/cpf-cnpj.pipe';
import { DecimalMetroQuadradoPipe } from './mask/decimal-metro-quadrado.pipe';
import { DecimalRoundedPipe } from './mask/decimal-rounded.pipe';
import { TelefonePipe } from './mask/telefone.pipe';
import { SimNaoTradutorPipe } from './sim-nao-tradutor/sim-nao-tradutor.pipe';
import { SplitCommaPipe } from './split-comma/split-comma.pipe';
import { TrueFalsePipe } from './true-false/true-false.pipe';
import { TrucaTextoPipe } from './trunca-texto/truca-texto.pipe';
import { ZeroEsquerdaPipe } from './zero-esquerda/zero-esquerda.pipe';
import { EnumTradutorPipe } from './enum-tradutor/enum-tradutor.pipe';

const PIPES = [
  AtivoInativoPipe,
  DataSemHoraPipe,
  CpfCnpjPipe,
  DecimalMetroQuadradoPipe,
  DecimalRoundedPipe,
  TelefonePipe,
  SimNaoTradutorPipe,
  SplitCommaPipe,
  TrueFalsePipe,
  TrucaTextoPipe,
  ZeroEsquerdaPipe,
  EnumTradutorPipe
]

@NgModule({
  declarations: [PIPES],
  imports: [
    CommonModule
  ],
  providers: [PIPES],
  exports: [PIPES]
})
export class PipesModule { }
