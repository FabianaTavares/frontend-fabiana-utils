import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelEdicaoContainerSimplesComponent } from './painel-edicao-container-simples.component';

describe('PainelEdicaoContainerSimplesComponent', () => {
	let component: PainelEdicaoContainerSimplesComponent;
	let fixture: ComponentFixture<PainelEdicaoContainerSimplesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PainelEdicaoContainerSimplesComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PainelEdicaoContainerSimplesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
