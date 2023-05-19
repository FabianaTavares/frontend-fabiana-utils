import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adicionar-botao',
  templateUrl: './adicionar-botao.component.html',
  styleUrls: ['./adicionar-botao.component.scss']
})
export class AdicionarBotaoComponent implements OnInit {

  @Input() texto: string;

  @Input() textoBtn: string;

  @Input() disabled: false;

  @Input() $adicionar: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  adicionar() {
    this.$adicionar.next();
  }

}
