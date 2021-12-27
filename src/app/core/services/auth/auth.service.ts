import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from 'app/core/config/constants';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';

const AUTH_API = AppSettings.API_ENDPOINT + '/auth/';
const API_ENDPOINT_LOCAL = AppSettings.API_ENDPOINT_LOCAL + '/auth/';
const CODE_API = AppSettings.CODE_API;


const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private _authenticated: boolean = false;

    constructor(private _httpClient: HttpClient) {}


    signIn(credentials: { email: string; password: string }): Observable<any>
    {
        // Throw error, if the user is already logged in
        if ( this._authenticated )
        {
            return throwError('User is already logged in.');
        }

        return this._httpClient.post(API_ENDPOINT_LOCAL + 'login/' + CODE_API, credentials, httpOptions);
    }

    signUp(user: { name: string; email: string; password: string; company: string }): Observable<any>
    {
        return this._httpClient.post(API_ENDPOINT_LOCAL + 'register/' + CODE_API, user, httpOptions);
    }


    register(nombres: string, email: string, password: string): Observable<any> {
        return this._httpClient.post(API_ENDPOINT_LOCAL + 'register/' + CODE_API, {
        nombres,
        email,
        password
        }, httpOptions);
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    set accessToken(token: string)
    {
        localStorage.setItem('accessToken', token);
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    get accessToken(): string
    {
         return localStorage.getItem('accessToken') ?? '';
    }
}
