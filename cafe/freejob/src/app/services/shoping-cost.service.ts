import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseurl } from '../enviroment/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ShopingCostService {
  token=localStorage.getItem('userToken')
  constructor(private _HttpClient:HttpClient) { }
  getAllCost():Observable<any>
  {
    return this._HttpClient.get(`${baseurl}/api/ShippingCost`,{headers:{"Authorization":"Bearer "+this.token}})
  }
}
