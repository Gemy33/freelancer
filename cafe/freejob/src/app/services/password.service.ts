import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseurl } from '../enviroment/baseurl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
   private readonly _HttpClient=inject(HttpClient);

   
   
   sendemail(email:string):Observable<any>{
   return this._HttpClient.post(`${baseurl}/api/Accountt/forgetpassword`,email)
   }
   sendcode(data:{}):Observable<any>{
    return this._HttpClient.post(`${baseurl}/api/Accountt/VerifyCode`,data)
   }
   resetPassword(data:{}):Observable<any>{
    return this._HttpClient.post(`${baseurl}/api/Accountt/ResetPassword`,data)
   }
   
}
