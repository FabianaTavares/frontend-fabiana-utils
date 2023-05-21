import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ReqService {
	constructor(private http: HttpClient) {}

	//Observable<infoBasicReq>
	getInfoBasicas(idReq: number): Observable<any> {
		return this.http.get<any>(`${environment.API_URL}/infobasica/${idReq}/info`).pipe(take(1));
	}

	geraDocumento(idReq: number | string): Observable<any> {
		return this.http.get(`${environment.API_URL}/download/${idReq}/download`, {
			responseType: 'arraybuffer' as 'json'
		});
	}
}
