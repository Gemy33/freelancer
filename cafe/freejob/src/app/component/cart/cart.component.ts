import { Component, inject, OnInit } from '@angular/core';
import { BgFixedComponent } from "../reuseable-components/bg-fixed/bg-fixed.component";
import { FixedInfoComponent } from "../reuseable-components/fixed-info/fixed-info.component";
import { FavouriteService } from '../../services/favourite.service';
import { log } from 'util';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [BgFixedComponent, FixedInfoComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
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
