import { CadastrarPerfilComponent } from './components/cadastrar-perfil/cadastrar-perfil.component';
import { ComponentsModule } from './../../../../shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosRoutingModule } from './cadastros-routing.module';


@NgModule({
  declarations: [
    CadastrarPerfilComponent
  ],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    ComponentsModule
  ]
})
export class CadastrosModule { }
