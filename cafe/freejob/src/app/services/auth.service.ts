import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseurl } from '../enviroment/baseurl';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}

  
  
  uer_info_form_token: BehaviorSubject<any> = new BehaviorSubject(null);
  private isNotlogin: BehaviorSubject<boolean> = new BehaviorSubject(true);

  register(data: {}): Observable<any> {
    return this._HttpClient.post(`${baseurl}/api/Accountt/register`, data);
  }
  login(data: {}): Observable<any> {
    return this._HttpClient.post(`${baseurl}/api/Accountt/login`, data);
    
  }
  updataIsNotlogin(desction: boolean) {
    this.isNotlogin.next(desction);
  }
  getStataus():boolean
  {
   return this.isNotlogin.getValue();
  }

  decode(): void {
    if (localStorage.getItem('userToken') !== null) {
      this.uer_info_form_token.next(
        jwtDecode(localStorage.getItem('userToken')!)
      );
    }
  }

  // ------------------------------log-out-------------
  logout() {
    //there is many item in localstorage but we remove token becouse this response on login===gaurd check usertoken
    if (localStorage.getItem('userToken') !== null) {
      localStorage.removeItem('userToken');
      this.uer_info_form_token.next(null);
    }
   
  }
}
