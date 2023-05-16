import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-painel-modo-edicao-container',
  templateUrl: './painel-modo-edicao-container.component.html',
  styleUrls: ['./painel-modo-edicao-container.component.scss']
})
export class PainelModoEdicaoContainerComponent {

  @Input() botaoSalvar: string;
  @Input() esconderCancelar: string;
  @Input() desabilitarBtnSalvar = false;

  @Output() salvar = new EventEmitter<any>();
  @Output() fechar = new EventEmitter<any>();
  @Output() erro = new EventEmitter<Error>();
  @Output() aplicar = new EventEmitter<any>();

  constructor() { }

  public aplicarEdicao() {
    this.aplicar.emit(null);
  }

  public salvarEdicao() {
    this.salvar.emit(null);
  }

  public cancelarEdicao() {
    this.fechar.emit(null);
  }

}
