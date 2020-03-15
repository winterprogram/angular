import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Cookie } from '../../node_modules/cookie';
// import { CookieService } from 'ngx-cookie-service';

import { Observable, observable } from "rxjs";
import { catchError } from 'rxjs/operators';;
// import { tap } from 'rxjs/operator'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http: HttpClient) { }

  //for attaching JWT service 
  public getUserInfoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('userinfo'))
  }

  public setUserInfoFromLocalStorage = (data) => {

    localStorage.setItem('userInfo', JSON.stringify(data))
  }

  //end of get and set function

  baseUrl = "https://chatapi.edwisor.com/api/v1/"

  public signup(data): Observable<any> {
    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('email', data.email)
      .set('mobileNumber', data.mobileNumber)
      .set('password', data.password)
      .set('apiKey', data.apiKey)
    console.log(data)
    return this.http.post(this.baseUrl + 'users/signup', params)
  }

  public login(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(this.baseUrl + 'users/login', params)
  }

}
