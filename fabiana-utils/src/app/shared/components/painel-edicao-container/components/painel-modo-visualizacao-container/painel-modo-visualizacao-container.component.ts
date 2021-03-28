import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-painel-modo-visualizacao-container',
  templateUrl: './painel-modo-visualizacao-container.component.html',
  styleUrls: ['./painel-modo-visualizacao-container.component.css']
})
export class PainelModoVisualizacaoContainerComponent {

  @Input() botaoEditar: string;
  @Input() esconderCabecalho: boolean;

  @Output() editar = new EventEmitter<boolean>();

  constructor() { }

  public habilitarEdicao(){
    this.editar.emit(true);
  }

}
