import { Component, Input, OnInit } from '@angular/core';
import { AbaModel } from './model/aba.model';

@Component({
  selector: 'app-abas',
  templateUrl: './abas.component.html',
  styleUrls: ['./abas.component.css']
})
export class AbasComponent implements OnInit {

  @Input() path: string;

  listaDeAbas: Array<AbaModel> = [];

  constructor() { }

  ngOnInit(): void {
    this.criarAbas();
  }

  criarAbas(){
    this.listaDeAbas = [
      {
        nome: 'aba de teste 1',
        url: 'cadastrar-perfil',
        icone: 'fa fa-file',
        exibirAba: true, // pode chamar um função pra falar se é resumo ou edicao.
        bloqueada: false
      },
      {
        nome: 'aba de teste 2',
        url: 'cadastrar-perfil',
        icone: 'fa fa-folder-open',
        exibirAba: true, // pode chamar um função pra falar se é resumo ou edicao.
        bloqueada: false
      },

    ]
  }

}


