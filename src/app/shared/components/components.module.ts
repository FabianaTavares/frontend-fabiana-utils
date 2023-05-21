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
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SistemaModalModule } from '../modules/sistema-modal/sistema-modal.module';
import { AbasComponent } from './abas/abas.component';
import { ItemAbaComponent } from './abas/item-aba/item-aba.component';
import { InputComponent } from './input/input.component';
import { AdicionarBotaoComponent } from './adicionar-botao/adicionar-botao.component';
import { PainelEdicaoContainerSimplesComponent } from './painel-edicao-container/components/painel-edicao-container-simples/painel-edicao-container-simples.component';
import { PainelModoEdicaoContainerComponent } from './painel-edicao-container/components/painel-modo-edicao-container/painel-modo-edicao-container.component';
import { PainelModoVisualizacaoContainerComponent } from './painel-edicao-container/components/painel-modo-visualizacao-container/painel-modo-visualizacao-container.component';
import { BadgeStatusNovoComponent } from './badge-status-novo/badge-status-novo.component';
import { PaginacaoOpcaoNovaComponent } from './paginacao-opcao-nova/paginacao-opcao-nova.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ToastrModule.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		DirectivesModule,
		PipesModule,
		PaginationModule.forRoot(),
		SistemaModalModule,
		NgxPaginationModule
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
		PaginacaoComponent,
		AbasComponent,
		ItemAbaComponent,
		InputComponent,
		AdicionarBotaoComponent,
		PainelEdicaoContainerSimplesComponent,
		PainelModoEdicaoContainerComponent,
		PainelModoVisualizacaoContainerComponent,
		BadgeStatusNovoComponent,
		PaginacaoOpcaoNovaComponent,
		MenuLateralComponent
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
		BarraAcoesComponent,
		PaginacaoComponent,
		AbasComponent,
		ItemAbaComponent,
		InputComponent,
		AdicionarBotaoComponent,
		PainelEdicaoContainerSimplesComponent,
		PainelModoEdicaoContainerComponent,
		PainelModoVisualizacaoContainerComponent,
		BadgeStatusNovoComponent,
		PaginacaoOpcaoNovaComponent,
		MenuLateralComponent
	],
	providers: [BreadcrumbService, BreadcrumbObserver]
})
export class ComponentsModule {}
