import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAbaComponent } from './item-aba.component';

describe('ItemAbaComponent', () => {
  let component: ItemAbaComponent;
  let fixture: ComponentFixture<ItemAbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
