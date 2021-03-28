import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelModoVisualizacaoContainerComponent } from './painel-modo-visualizacao-container.component';

describe('PainelModoVisualizacaoContainerComponent', () => {
  let component: PainelModoVisualizacaoContainerComponent;
  let fixture: ComponentFixture<PainelModoVisualizacaoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelModoVisualizacaoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelModoVisualizacaoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
