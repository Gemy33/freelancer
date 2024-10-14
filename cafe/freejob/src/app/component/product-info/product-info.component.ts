import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IproductInfo } from '../../interfaces/products';
import { CurrencyPipe } from '@angular/common';
import { FavouriteService } from '../../services/favourite.service';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent {

  private readonly _ProductsService=inject(ProductsService)
  private readonly _ActivatedRoute=inject(ActivatedRoute)
  private readonly _FavouriteService=inject(FavouriteService)
  id!:string
  products!:IproductInfo
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((p)=>{
      
      this.id=p.get("id")!;

    }
  )
    this._ProductsService.specificProduct(this.id).subscribe({
      next:(res)=>{
        console.log(res);
        this.products=res;
        console.log("product information ",this.products);
        

        
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }
  addtowishlist(id:number){

    this._FavouriteService.addToFav(id.toString()).subscribe({
      next:(res)=>{
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
