import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseurl } from '../enviroment/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }
  allProducts():Observable<any>
  {
    return this._HttpClient.get(`${baseurl}/api/Product/GetAllProducts`);
  }
}
