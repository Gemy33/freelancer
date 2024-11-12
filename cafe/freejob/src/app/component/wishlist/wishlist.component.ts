import { Component, inject, OnInit } from '@angular/core';
import { BgFixedComponent } from "../reuseable-components/bg-fixed/bg-fixed.component";
import { HttpClient } from '@angular/common/http';
import { FavouriteService } from '../../services/favourite.service';
import { Products } from '../../interfaces/products';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductComponent } from "../product/product.component";


@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [RouterLink, BgFixedComponent, CurrencyPipe, ProductComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  allFavProduct:Products[]=[]
  private _FavouriteService=inject(FavouriteService)
  ngOnInit(): void {
    // console.log(this._FavouriteService.token);
    
    this._FavouriteService.getAllFav().subscribe({
      next:(res)=>{
        console.log(res);
        this.allFavProduct=res;
        console.log(this.allFavProduct);
        
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
    
  }
  
  // removeFromFAv(id:number)
  // {

  //   this._FavouriteService.deleteFromFav(id.toString()).subscribe({
  //     next:(res)=>{
  //       console.log(res);
        
  //     },
  //     error:(err)=>{
  //       console.log(err);
        
  //     }
  //   })

  // }
 

}
