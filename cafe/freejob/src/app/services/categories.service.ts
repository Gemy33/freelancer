import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseurl } from '../enviroment/baseurl';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  private readonly _HttpClient=inject(HttpClient)

  getAllCategories():Observable<any>{
    return this._HttpClient.get(`${baseurl}/api/Category/GetAll`)
  }
  get_specific_cat(id:String):Observable<any>
  {
    return this._HttpClient.get(`${baseurl}/api/Category/${id}`)
  }
}
