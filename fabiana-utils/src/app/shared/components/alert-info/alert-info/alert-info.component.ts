import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-info',
  templateUrl: './alert-info.component.html',
  styleUrls: ['./alert-info.component.css']
})
export class AlertInfoComponent implements OnInit {

  @Input() text: string;

  @Input() class: string;

  @Input() url: string;

  @Input() textoLink = 'clique aqui';

  constructor() { }

  ngOnInit(): void {
  }

}
