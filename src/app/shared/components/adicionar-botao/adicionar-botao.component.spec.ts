import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarBotaoComponent } from './adicionar-botao.component';

describe('AdicionarBotaoComponent', () => {
	let component: AdicionarBotaoComponent;
	let fixture: ComponentFixture<AdicionarBotaoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AdicionarBotaoComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AdicionarBotaoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
