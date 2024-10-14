import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { baseurl } from '../enviroment/baseurl';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  

token='';
  constructor(private _HttpClient: HttpClient) {
  
      if (typeof localStorage !== 'undefined')
      {
       this.token= localStorage.getItem('userToken') !;
      //  console.log(this.token);
       
      }
     
      
    
  }
  print()
  {
    console.log(this.token);
    
  }
  getAllFav(): Observable<any> {
    return this._HttpClient.get(`${baseurl}/api/Favourite/GetAllFavorites`,{headers:{"Authorization":"Bearer "+this.token}});
  }
  
  addToFav(id:string): Observable<any> {
    return this._HttpClient.post(`${baseurl}/api/Favourite/AddFavourite?ProductId=${id}`,{},{headers:{"Authorization":"Bearer "+this.token}});
  }
  deleteFromFav(id: string): Observable<any> {
    return this._HttpClient.post(
      `${baseurl}/api/Favourite/DeleteFavourite?ProductId=${id}`,{},
      {headers:{"Authorization":"Bearer "+this.token}}
    );
  }
}
