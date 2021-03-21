import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoUtilsAdminComponent } from './projeto-utils-admin.component';

describe('ProjetoUtilsAdminComponent', () => {
  let component: ProjetoUtilsAdminComponent;
  let fixture: ComponentFixture<ProjetoUtilsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoUtilsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoUtilsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
