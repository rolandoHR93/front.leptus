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

    getdatosRandom(): Observable<any[]>{
		return this._httpClient.get<any[]>('http://api.leptus.pe/api/auth/getRegisterHome/iT3BnOENtV30pxRDadZ99e43wbDL4NA9');
    }

    getDatosInicialesRegistroNuevo(): Observable<any[]> {
		return this._httpClient.get<any[]>(AUTH_API + '/auth/' + 'getRegisterHome/' + CODE_API);
	}

    getProvinciasInicial(deparatamentoID: string): Observable<any[]> {
		return this._httpClient.get<any[]>(AUTH_API + '/ubigeos/getProvincias/' + CODE_API+'/'+deparatamentoID);
	}

    getDistritosInicial(deparatamentoID: string, provinciaID: string): Observable<any[]> {
		return this._httpClient.get<any[]>(AUTH_API + '/ubigeos/getDistritos/' + CODE_API+'/'+deparatamentoID+'/'+provinciaID);
	}

    register(persona: any, empresa: any, usuario: any): Observable<any> {

        const datosRegistro = {
            'persona': persona,
            'empresa': empresa,
            'usuario': usuario,
        };

        console.log(datosRegistro);

        return this._httpClient.post(AUTH_API  + '/auth/' + 'register/' + CODE_API, datosRegistro, httpOptions);
    }
}
