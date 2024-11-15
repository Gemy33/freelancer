import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { baseurl } from '../enviroment/baseurl';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  specproducts=signal<Products[]>([])
  constructor(private _HttpClient:HttpClient) { }
  allProducts():Observable<any>
  {
    return this._HttpClient.get(`${baseurl}/api/Product/GetAllProducts`);
  }
  specificProduct(id:string):Observable<any>{
    return this._HttpClient.get(`${baseurl}/api/Product/${id}`)
  }
}
