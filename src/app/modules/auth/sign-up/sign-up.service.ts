import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from 'app/core/config/constants';
import { Observable } from 'rxjs';

const AUTH_API = AppSettings.API_END_SERVICE;
const API_ENDPOINT_LOCAL = AppSettings.API_ENDPOINT_LOCAL;
const CODE_API = AppSettings.CODE_API;

const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

    constructor(private _httpClient: HttpClient) {}

    getDatosInicialesRegistroNuevo(): Observable<any[]> {
		return this._httpClient.get<any[]>(AUTH_API + '/auth/' + 'getRegisterHome/' + CODE_API);
	}

    getProvinciasInicial(deparatamentoID: string): Observable<any[]> {
		return this._httpClient.get<any[]>(AUTH_API + '/ubigeos/getProvincias/' + CODE_API+'/'+deparatamentoID);
	}

    getDistritosInicial(deparatamentoID: string, provinciaID: string): Observable<any[]> {
		return this._httpClient.get<any[]>(AUTH_API + '/ubigeos/getDistritos/' + CODE_API+'/'+deparatamentoID+'/'+provinciaID);
	}

    register(nombres: string, email: string, password: string): Observable<any> {
        return this._httpClient.post(AUTH_API  + '/auth/' + 'register/' + CODE_API, {
        nombres,
        email,
        password
        }, httpOptions);
    }
}
