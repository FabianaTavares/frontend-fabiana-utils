import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComportamentosRoutingModule } from './comportamentos-routing.module';
import { ComportamentosComponent } from './comportamentos.component';


@NgModule({
  declarations: [ComportamentosComponent],
  imports: [
    CommonModule,
    ComportamentosRoutingModule
  ]
})
export class ComportamentosModule { }
