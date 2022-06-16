import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginacaoOpcaoNovaComponent } from './paginacao-opcao-nova.component';

describe('PaginacaoOpcaoNovaComponent', () => {
  let component: PaginacaoOpcaoNovaComponent;
  let fixture: ComponentFixture<PaginacaoOpcaoNovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginacaoOpcaoNovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginacaoOpcaoNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
