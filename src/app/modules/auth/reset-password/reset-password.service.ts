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
export class ResetPasswordService {
    constructor(private _httpClient: HttpClient) {}

    resetPassword(email: string, password: string, password_confirmation: string, token: string): Observable<any> {

        const datosEnviar = {
            'email' : email,
            'password' : password,
            'password_confirmation' : password_confirmation,
            'token' : token
        };

        return this._httpClient.post(AUTH_API +'/auth/' + 'reset-password/' +  CODE_API, datosEnviar, httpOptions);
    }
}
