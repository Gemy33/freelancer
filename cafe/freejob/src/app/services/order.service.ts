import { Token } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseurl } from '../enviroment/baseurl';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  token=localStorage.getItem('userToken')
    constructor(private HttpClient:HttpClient) { }
  creatOrder(data:any):Observable<any>
  {
return this.HttpClient.post(`${baseurl}/api/Order`,data,{headers:{"Authorization":"Bearer "+this.token}})
  }
  GetAllOrdersForUser():Observable<any>
  {
    return this.HttpClient.get(`${baseurl}/api/Order/UserOrders`,{headers:{"Authorization":"Bearer "+this.token}})
  }
  getSpecOrder(id:number):Observable<any>{
    return this.HttpClient.get(`${baseurl}/api/Order/${id}`,{headers:{"Authorization":"Bearer "+this.token}})
  }

  cancle_order(id:number):Observable<any>{
    return this.HttpClient.put(`${baseurl}/api/Order/Cancel/${id}`,undefined,{headers:{"Authorization":"Bearer "+this.token}})
  }
  reorder(id:number):Observable<any>{
    return this.HttpClient.put(`${baseurl}/api/Order/ReOrder/${id}`,{},{headers:{"Authorization":"Bearer "+this.token}})
  }
  delete_order(id:number):Observable<any>{
    return this.HttpClient.delete(`${baseurl}/api/Order/DeleteOrder/${id}`,{headers:{"Authorization":"Bearer "+this.token}})
  }
  
}
