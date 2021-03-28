import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-painel-edicao-container-simples',
  templateUrl: './painel-edicao-container-simples.component.html',
  styleUrls: ['./painel-edicao-container-simples.component.css']
})
export class PainelEdicaoContainerSimplesComponent implements OnInit {

  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() botaoEditar: string;
  @Input() esconderCabecalho: boolean;
  @Input() botaoSalvar: boolean;
  @Input() esconderCancelar: boolean;
  @Input() desabilitarBtnSalvar: boolean;
  @Input() desabilitarBtnCancelar: boolean;

  @Output() salvar = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<any>();
  @Output() aplicar = new EventEmitter<any>();
  @Output() editar = new EventEmitter<any>();

  private _edicao: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public habilitarEdicao(){
    this.editar.emit(true);
    this._edicao = true;
  }


  public desabilitarEdicao(){
    this._edicao = false;
    this.cancelar.emit(null);
  }

  public tratarErro(event: Error) {
    alert(event.message);
  }

  salvarEdicao(){
    this.salvar.emit(null);
  }

  public get edicao(){
    return this._edicao;
  }


}
