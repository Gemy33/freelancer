import { Token } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
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
       
      }
   }
  addToCart(data:object):Observable<any>
  {
    return this.HttpClient.post(`${baseurl}/api/Cart`,data,{headers:{"Authorization":"Bearer "+this.token}})
  }
  getCart():Observable<any>{
    return this.HttpClient.get(`${baseurl}/api/Cart`,{headers:{"Authorization":"Bearer "+this.token}})
  }
  removeItemFromCart(itemId:string,cartId:string):Observable<any>{
    return this.HttpClient.delete(`${baseurl}/api/Cart/Item?cartid=${cartId}&Itemid=${itemId}`,
      {headers:{"Authorization":"Bearer "+this.token}}
    )
  }
  increaseCount(cartId:string,itemId:number):Observable<any>{
   

     return  this.HttpClient.post(`${baseurl}/api/Cart/Increase?cartid=${cartId}&ItemId=${itemId}`,
      {headers:{"Authorization":"Bearer "+this.token}})
    
  }
  deceraseCount(cartId:string,itemId:number):Observable<any>{
   

     return  this.HttpClient.post(`${baseurl}/api/Cart/Decrease?cartid=${cartId}&ItemId=${itemId}`,{headers:{"Authorization":"Bearer "+this.token}})
    
  }
  deleteCart(cartId:string):Observable<any>{
   return this.HttpClient.delete(`${baseurl}/api/Cart?cartid=${cartId}`,
      {headers:{"Authorization":"Bearer "+this.token}}
    )
  }
}
