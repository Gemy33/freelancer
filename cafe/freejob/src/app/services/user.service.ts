import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseurl } from '../enviroment/baseurl';
import { updateuesr, userdata } from '../interfaces/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private readonly _HttpClient=inject(HttpClient);
  getuser():Observable<any>{
    return this._HttpClient.get(`${baseurl}/api/Accountt/GetUser`,{
      headers:{"Authorization":"Bearer "+localStorage.getItem("userToken")} }
  )
  }
  updateuserInfo(data:updateuesr):Observable<any>{
    return this._HttpClient.put(`${baseurl}/api/Accountt/UpdateUser`,data,{
      headers:{"Authorization":"Bearer "+localStorage.getItem("userToken")}
    })
  }

  changeProfile(url:FormData):Observable<any>{
    return this._HttpClient.put(`${baseurl}/api/Accountt/AddProfilePhoto`,url,{
      headers:{"Authorization":"Bearer "+localStorage.getItem("userToken")}
    })
  }
}
