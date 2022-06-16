import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeStatusNovoComponent } from './badge-status-novo.component';

describe('BadgeStatusNovoComponent', () => {
  let component: BadgeStatusNovoComponent;
  let fixture: ComponentFixture<BadgeStatusNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeStatusNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeStatusNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
