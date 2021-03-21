import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-informativo',
  templateUrl: './modal-informativo.component.html',
  styleUrls: ['./modal-informativo.component.css']
})
export class ModalInformativoComponent implements OnInit {

  mensagem: string;
  txtBtn: 'OK';

  confirmarEvt: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private modalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  confirmar(){
    this.confirmarEvt.emit();
    this.fecharModal();
  }

  fecharModal(){
    this.modalRef.hide();
  }

}
