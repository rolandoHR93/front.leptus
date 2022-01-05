import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from 'app/core/config/constants';
import { Observable } from 'rxjs';


const AUTH_API = AppSettings.API_END_SERVICE + '/auth/';
const API_ENDPOINT_LOCAL = AppSettings.API_ENDPOINT_LOCAL + '/auth/';
const CODE_API = AppSettings.CODE_API;

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

    constructor(private _httpClient: HttpClient) {}

    getDatosInicialesRegistroNuevo(): Observable<any[]> {
		return this._httpClient.get<any[]>(AUTH_API + 'getRegisterHome/' + CODE_API);
	}
}
