import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  @Input() totalItems: number;
  @Input() totalItemsPage: 10;
  @Input() pageIndex: string;
  @Output() consultarPagina: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  novaPagina(event: any){
    this.consultarPagina.next(event.page);
  }

}
