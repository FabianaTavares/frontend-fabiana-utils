import { ValidacaoFormsValidators } from './../../../../../../shared/validators/functions-valid.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SistemaModalService } from './../../../../../../shared/modules/sistema-modal/services/sistema-modal.service';
import { PaginaPublicaModel } from './../../../../../../shared/models/interface/pagina-publica.model';
import { BreadcrumbService } from './../../../../../../shared/components/breadcrumb/services/breadcrumb.service';
import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ativarMensagemErros } from 'src/app/shared/util/functions-util';

@Component({
  selector: 'app-cadastrar-perfil',
  templateUrl: './cadastrar-perfil.component.html',
  styleUrls: ['./cadastrar-perfil.component.css']
})
export class CadastrarPerfilComponent implements OnInit {

  pageIndex: number;
  itensPorPagina: PageChangedEvent;
  resultadoConsulta: PaginaPublicaModel<any>; //no any pode haver outro model correspondente.
  filtroAcionado = false;
  pesquisaTeste: any; //trocar o any pelo model de pesquisa do componente
  status: any;
  path: string;
  formTeste: FormGroup;

  constructor(
    private fb: FormBuilder,
    private breadcrumbService: BreadcrumbService,
    private sistemaModalService: SistemaModalService
  ) { }

  ngOnInit(): void {
    setTimeout(() => { this.breadcrumbService.listarRotas(); });
    this.criarFormulario();
    this.status = "N";
    this.path = '/rota-teste';
  }

  criarFormulario(){
    this.formTeste = this.fb.group({
      documento: [null, [Validators.required, ValidacaoFormsValidators.validaCpfCnpj]],
      telefone: [null, [Validators.required, ValidacaoFormsValidators.validaTelefone]]
    });
  }

  salvar(){
    ativarMensagemErros(this.formTeste);

    if(this.formTeste.valid){
      alert('oi');
      /*  this.serviceCadastrarPerfil.salvarPerfil(this.formTeste).subscribe((response) => {

      }) */
    }
  }

  cancelar(){
    this.formTeste.reset();
  }

  executarPesquisa(pagina?){
    pagina ? this.itensPorPagina.page = pagina : this.itensPorPagina = {
      page: 1, itemsPerPage: 10 };
    this.filtroAcionado = true;

    this.pesquisaTeste = this.mapearPesquisa(this.itensPorPagina.page);

    /* this.serviceCadastrarPerfil.getPesquisaPerfil(this.pesquisaTeste).subscribe((result: PaginaPublicaModel<any>) => {
      //trocar o any por model de resposta
      this.resultadoConsulta = result;
    },
    (err) => {
      //this.toarstService.error(err.error[0].msg);
    }
    ); */
  }

  mapearPesquisa(pageIndex?: number): any {
    const params = {
      /* nome: this.formPesquisa.get('nome').value,
      cpf: this.formPesquisa.get('cpf').value,
      ordem: this.formPesquisa.get('ordem').value,
      coluna: this.formPesquisa.get('coluna').value,
      pagina: pageIndex */
    };

    return params;
  }

  abriModal(){
    this.sistemaModalService.openModalInfo('TESTESSS').subscribe();
  }



}
