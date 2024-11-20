import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseurl } from '../enviroment/baseurl';
import { Address } from '../interfaces/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  token='';
  private readonly HttpClient =inject(HttpClient)
  constructor() {
    if (typeof localStorage !== 'undefined')
      {
       this.token= localStorage.getItem('userToken') !;
       console.log(this.token);
       
      }
   }
  updataAddress(data:Address):Observable<any>
  {
    return this.HttpClient.put(`${baseurl}/api/Accountt/EditAddress`,data,{headers:{"Authorization":"Bearer "+this.token}})
  }
  getUserAddress():Observable<any>
  {
    return this.HttpClient.get(`${baseurl}/api/Accountt/GetUserAddressess`,{headers:{"Authorization":"Bearer "+this.token}})
  }
  addAddress(data:Address):Observable<any>
  {
    return this.HttpClient.post(`${baseurl}/api/Accountt/AddAddress`,data,{headers:{"Authorization":"Bearer "+this.token}})
  }
}
