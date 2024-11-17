import { Token } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseurl } from '../enviroment/baseurl';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token='';

  private readonly HttpClient=inject(HttpClient);
  constructor() {
    if (typeof localStorage !== 'undefined')
      {
       this.token= localStorage.getItem('userToken') !;
       console.log(this.token);
       
      }
   }
  addToCart(data:object):Observable<any>
  {
    return this.HttpClient.post(`${baseurl}/api/Cart`,data,{headers:{"Authorization":"Bearer "+this.token}})
  }
  getCart():Observable<any>{
    return this.HttpClient.get(`${baseurl}/api/Cart`,{headers:{"Authorization":"Bearer "+this.token}})
  }
}
