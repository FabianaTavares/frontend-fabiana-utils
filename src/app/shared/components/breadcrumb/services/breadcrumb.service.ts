import { Injectable } from '@angular/core';
import { BreadcrumbObserver } from './breadcrumb.observer';

@Injectable({
	providedIn: 'root'
})
export class BreadcrumbService {
	constructor(private breadcrumbObs: BreadcrumbObserver) {}

	listarRotas() {
		this.breadcrumbObs.listarRotas();
	}
}
