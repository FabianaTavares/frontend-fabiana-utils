import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ReqResultModel } from '../../models/interface/req-result.model';

@Injectable({
	providedIn: 'root'
})
export class ReqService {
	constructor(private http: HttpClient) {}

	//Observable<infoBasicReq>
	getInfoBasicas(idReq: number): Observable<ReqResultModel> {
		return this.http.get<ReqResultModel>(`${environment.API_URL}/infobasica/${idReq}/info`).pipe(take(1));
	}

	geraDocumento(idReq: number | string): Observable<ReqResultModel> {
		return this.http.get<ReqResultModel>(`${environment.API_URL}/download/${idReq}/download`, {
			responseType: 'arraybuffer' as 'json'
		});
	}
}
