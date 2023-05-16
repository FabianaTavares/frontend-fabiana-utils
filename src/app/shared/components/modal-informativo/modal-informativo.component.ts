import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-informativo',
  templateUrl: './modal-informativo.component.html',
  styleUrls: ['./modal-informativo.component.scss']
})
export class ModalInformativoComponent implements OnInit {

  mensagem: string;
  @Input() public txtBtn = 'okkkkkkkkkkkkk';

  confirmarEvt: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private modalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  confirmar() {
    this.confirmarEvt.emit();
    this.fecharModal();
  }

  fecharModal() {
    this.modalRef.hide();
  }

}
