/* eslint-disable @typescript-eslint/naming-convention */
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
export class ActivateAccountService {
    constructor(private _httpClient: HttpClient) {}

    activateAccount(email: string, token_activate: string): Observable<any> {

        const datosEnviar = {
            'email' : email,
            'token_activate' : token_activate
        };

        return this._httpClient.post(AUTH_API +'/auth/' + 'activate-account/' +  CODE_API, datosEnviar, httpOptions);
    }
}
