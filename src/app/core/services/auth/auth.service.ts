import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from 'app/core/config/constants';
import { Observable } from 'rxjs';

const AUTH_API = AppSettings.API_ENDPOINT + '/auth/';
const CODE_API = AppSettings.CODE_API;

const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {}


  login(email: string, password: string): Observable<any> {

    return this.http.post(AUTH_API + 'login/' + CODE_API, {
      email,
      password
    }, httpOptions);
  }

  login2(user: any): Observable<any> {
    return this.http.post('https://reqres.in/api/login', user);
  }

  register(nombres: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register/' + CODE_API, {
      nombres,
      email,
      password
    }, httpOptions);
  }

}
