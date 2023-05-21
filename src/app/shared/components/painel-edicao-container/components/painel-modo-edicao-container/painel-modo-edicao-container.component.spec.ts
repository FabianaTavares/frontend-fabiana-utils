import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelModoEdicaoContainerComponent } from './painel-modo-edicao-container.component';

describe('PainelModoEdicaoContainerComponent', () => {
	let component: PainelModoEdicaoContainerComponent;
	let fixture: ComponentFixture<PainelModoEdicaoContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PainelModoEdicaoContainerComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PainelModoEdicaoContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
