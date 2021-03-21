import { BreadcrumbService } from './breadcrumb/services/breadcrumb.service';
import { PipesModule } from './../pipes/pipes.module';
import { DirectivesModule } from './../directives/directives.module';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertInfoComponent } from './alert-info/alert-info/alert-info.component';
import { ContainerComponent } from './container/container/container.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ModalConfirmarComponent } from './modal-confirmar/modal-confirmar/modal-confirmar.component';
import { ModalPadraoComponent } from './modal-padrao/modal-padrao/modal-padrao.component';
import { ModalInformativoComponent } from './modal-informativo/modal-informativo.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbObserver } from './breadcrumb/services/breadcrumb.observer';
import { BarraAcoesComponent } from './barra-acoes/barra-acoes.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    PipesModule
  ],
  entryComponents: [
    ModalConfirmarComponent,
    ModalInformativoComponent,
    ModalPadraoComponent
  ],
  declarations: [
    AlertInfoComponent,
    ContainerComponent,
    MenuComponent,
    ModalConfirmarComponent,
    ModalPadraoComponent,
    ModalInformativoComponent,
    BreadcrumbComponent,
    MenuComponent,
    AlertInfoComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    BarraAcoesComponent,
  ],
  exports: [
    AlertInfoComponent,
    ContainerComponent,
    MenuComponent,
    ModalConfirmarComponent,
    ModalPadraoComponent,
    ModalInformativoComponent,
    BreadcrumbComponent,
    MenuComponent,
    AlertInfoComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    BarraAcoesComponent
  ],
  providers: [
    BreadcrumbService,
    BreadcrumbObserver
  ]
})
export class ComponentsModule { }
