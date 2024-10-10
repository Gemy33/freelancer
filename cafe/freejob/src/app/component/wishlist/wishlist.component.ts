import { Component, inject, OnInit } from '@angular/core';
import { BgFixedComponent } from "../reuseable-components/bg-fixed/bg-fixed.component";
import { HttpClient } from '@angular/common/http';
import { FavouriteService } from '../../services/favourite.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [BgFixedComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  private _FavouriteService=inject(FavouriteService)
  ngOnInit(): void {
    this._FavouriteService.getAllFav().subscribe({
      next:(res)=>{
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
  }
  

}
