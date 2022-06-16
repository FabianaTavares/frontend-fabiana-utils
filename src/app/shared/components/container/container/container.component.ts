import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() mb: string;
  /* @Input() titulo: string;
  @Input() subtitulo: string;
 */
  constructor() { }

  ngOnInit(): void {
  }

}
