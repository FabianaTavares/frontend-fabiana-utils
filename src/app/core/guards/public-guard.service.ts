import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PublicGuardService {
	constructor() {}

	canActivate(): boolean {
		return true;
	}

	canActivateChild(): boolean {
		return true;
	}
}
