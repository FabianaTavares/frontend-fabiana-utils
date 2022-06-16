import { ReqService } from './../../../../../../shared/services/services/req.service';
import { ValidacaoFormsValidators } from './../../../../../../shared/validators/functions-valid.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SistemaModalService } from './../../../../../../shared/modules/sistema-modal/services/sistema-modal.service';
import { PaginaPublicaModel } from './../../../../../../shared/models/interface/pagina-publica.model';
import { BreadcrumbService } from './../../../../../../shared/components/breadcrumb/services/breadcrumb.service';
import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ativarMensagemErros } from 'src/app/shared/util/functions-util';
import { criaUrlDownloadAnexo } from 'src/app/shared/models/interface/anexo-funcoes.model';
import { ControleCardEnum } from 'src/app/shared/models/enum/controle-card.enum';

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
  telefoneTeste: string;
  id: number;

  tipoCard: ControleCardEnum = ControleCardEnum.BOTAO;
  controleCardEnum: ControleCardEnum;
  isValidacoesSnackbarVisible: boolean = false;
  infoText: string = '';

  constructor(
    private fb: FormBuilder,
    private breadcrumbService: BreadcrumbService,
    private sistemaModalService: SistemaModalService,
    private req: ReqService
  ) {
    //this.tipoCard = this.controleCardEnum.BOTAO;
    //this.tipoCard = ControleCardEnum.BOTAO;
  }

  ngOnInit(): void {
    setTimeout(() => { this.breadcrumbService.listarRotas(); });
    this.criarFormulario();
    this.status = "N";
    this.telefoneTeste = '3133541101';
    this.path = '/rota-teste';

    console.log('alteação de testes de changelog');
  }

  criarFormulario() {
    this.formTeste = this.fb.group({
      cpfCnpj: [null, [Validators.required]],
      telefone: [null, [Validators.required, ValidacaoFormsValidators.validaTelefone]]
    });
  }

  salvar() {
    ativarMensagemErros(this.formTeste);

    if (this.formTeste.valid) {
      alert('oi');
      /*  this.serviceCadastrarPerfil.salvarPerfil(this.formTeste).subscribe((response) => {

      }) */
    }
  }

  cancelar() {
    this.formTeste.reset();
  }

  executarPesquisa(pagina?) {
    pagina ? this.itensPorPagina.page = pagina : this.itensPorPagina = {
      page: 1, itemsPerPage: 10
    };
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

  abriModal() {
    this.sistemaModalService.openModalInfo('TESTESSS').subscribe();
  }

  downloadPdf(id: number | string) {
    //chama o serviço e no retorno baixa;
    this.req.geraDocumento(this.id).subscribe(
      (res) => {
        criaUrlDownloadAnexo(res);
      }
    )
  }

  trocarCard(tipoCard: ControleCardEnum) {
    if (tipoCard === ControleCardEnum.BOTAO) {
      return null;
    }
    this.tipoCard = tipoCard;
  }

  mostrarEfeitoMsg() {
    console.log('mostra');
    this.isValidacoesSnackbarVisible = true;
    this.infoText = "Não foi possível carregar o arquivo."
  }

  esconderEfeitoMsg() {
    console.log('escfonde');
    this.isValidacoesSnackbarVisible = false;
  }
}
