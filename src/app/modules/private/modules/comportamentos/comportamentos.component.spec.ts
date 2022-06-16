import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComportamentosComponent } from './comportamentos.component';

describe('ComportamentosComponent', () => {
  let component: ComportamentosComponent;
  let fixture: ComponentFixture<ComportamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComportamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComportamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
