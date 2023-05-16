import { Component, OnInit } from '@angular/core';
import { ConstantUtils } from 'src/app/shared/models/interface/constants.util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getVersao() {
    return ConstantUtils.build_version;
  }

}
