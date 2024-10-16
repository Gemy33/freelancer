import { Component, ElementRef, inject, Input } from '@angular/core';
import { Products } from '../../interfaces/products';
import { Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FavouriteService } from '../../services/favourite.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  private readonly _FavouriteService=inject(FavouriteService)
  
 @Input({required:true}) allProduct:Products[]=[];
 @Input({required:true}) favourit:boolean=false;
 onclick(event:MouseEvent,id:number){
  console.log(event);
  
  
this._FavouriteService.deleteFromFav(id.toString()).subscribe({
  next:(res)=>{
  
   window.location.reload();
   console.log(res)
   
  },
  error:(err)=>{
    console.log(err)
  }
})
 }

}
