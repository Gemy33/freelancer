import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { baseurl } from '../enviroment/baseurl';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}
  register(data: {}): Observable<any> {
    return this._HttpClient.post(
      `${baseurl}/api/Accountt/register`,
      data
    );
  }
  login(data:{}):Observable<any>{
    return this._HttpClient.post(`${baseurl}/api/Accountt/login`,data )
  }


  // ------------------------------log-out-------------
 
   

}
