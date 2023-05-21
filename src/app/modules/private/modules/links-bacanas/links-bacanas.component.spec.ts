import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksBacanasComponent } from './links-bacanas.component';

describe('LinksBacanasComponent', () => {
	let component: LinksBacanasComponent;
	let fixture: ComponentFixture<LinksBacanasComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LinksBacanasComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LinksBacanasComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
