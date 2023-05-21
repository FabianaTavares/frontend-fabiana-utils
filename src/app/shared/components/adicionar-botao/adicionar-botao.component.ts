import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { ControleCardEnum } from '../../models/enum/controle-card.enum';

@Component({
  selector: 'app-adicionar-botao',
  templateUrl: './adicionar-botao.component.html',
  styleUrls: ['./adicionar-botao.component.scss']
})
export class AdicionarBotaoComponent implements OnInit {

  @Input() texto: string;

  @Input() textoBtn: string;

  @Input() disabled: false;

  @Input() $adicionar: EventEmitter<ControleCardEnum> = new EventEmitter<ControleCardEnum>();


  constructor() { }

  ngOnInit() {
  }

  adicionar() {
    this.$adicionar.next(null);
  }

}
