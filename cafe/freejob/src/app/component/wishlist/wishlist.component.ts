import { Component, inject, OnInit } from '@angular/core';
import { BgFixedComponent } from "../reuseable-components/bg-fixed/bg-fixed.component";
import { HttpClient } from '@angular/common/http';
import { FavouriteService } from '../../services/favourite.service';
import { Products } from '../../interfaces/products';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductComponent } from "../product/product.component";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [ BgFixedComponent, ProductComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  allFavProduct:Products[]=[]
  private _FavouriteService=inject(FavouriteService)
  private _ToastrService=inject(ToastrService)
  ngOnInit(): void {
    // console.log(this._FavouriteService.token);
    
    this._FavouriteService.getAllFav().subscribe({
      next:(res)=>{
        this.allFavProduct=res;
        
        
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
