import { SimNaoEnum } from './../../../models/enum/sim-nao.enum';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AbaModel } from '../model/aba.model';

@Component({
  selector: 'app-item-aba',
  templateUrl: './item-aba.component.html',
  styleUrls: ['./item-aba.component.scss']
})
export class ItemAbaComponent implements OnInit, OnDestroy, OnChanges {

  @Input() aba: AbaModel;

  rotaSubscription: Subscription;
  statusAtualReq: SimNaoEnum;
  rotaAtiva: false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.verificarEstado();
    this.cadastrarEventos();
    this.verificarAba(this.route.firstChild.routeConfig.path);
  }

  verificarEstado() {
    if (this.aba) {
      this.aba.exibirAba = (this.aba.exibirAba == null || this.aba.exibirAba === undefined) ? true : this.aba.exibirAba;
      this.aba.bloqueada = (this.aba.bloqueada == null || this.aba.bloqueada === undefined) ? false : this.aba.bloqueada;
    }
  }

  cadastrarEventos() {
    this.rotaSubscription = this.router.events.subscribe(evento => {
      if (event instanceof NavigationStart) {
        this.verificarAba(event.url);
      }
    });
  }

  verificarAba(url = '') {
    if (this.aba) {
      this.aba.ativa = url.includes(this.aba.url);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.aba) {

      this.verificarAba(this.route.firstChild.routeConfig.path);
      this.verificarEstado();
    }
  }

  ngOnDestroy() {
    this.rotaSubscription.unsubscribe();
  }

  direcionarAba() {
    if (this.aba && this.aba.url && !this.aba.bloqueada) {
      this.router.navigate([this.aba.url], { relativeTo: this.route });
    }
  }

}
