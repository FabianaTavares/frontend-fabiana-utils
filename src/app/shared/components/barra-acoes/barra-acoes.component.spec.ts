import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraAcoesComponent } from './barra-acoes.component';

describe('BarraAcoesComponent', () => {
  let component: BarraAcoesComponent;
  let fixture: ComponentFixture<BarraAcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraAcoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
