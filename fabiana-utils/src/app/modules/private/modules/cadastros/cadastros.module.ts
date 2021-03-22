import { PipesModule } from './../../../../shared/pipes/pipes.module';
import { CadastrarPerfilComponent } from './components/cadastrar-perfil/cadastrar-perfil.component';
import { ComponentsModule } from './../../../../shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosRoutingModule } from './cadastros-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastrarPerfilComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CadastrosRoutingModule,
    ComponentsModule,
    PipesModule
  ]
})
export class CadastrosModule { }
