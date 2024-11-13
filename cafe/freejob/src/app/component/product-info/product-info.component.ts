import { Component, inject, signal, viewChild, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IproductInfo } from '../../interfaces/products';
import { CurrencyPipe, NgClass } from '@angular/common';
import { FavouriteService } from '../../services/favourite.service';
import { FormsModule } from '@angular/forms';
        

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [FormsModule,CurrencyPipe,RouterLink,NgClass],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent {
  
  orderspeed=signal<boolean>(false);
  
  private readonly _ActivatedRoute=inject(ActivatedRoute)
  private readonly _ProductsService=inject(ProductsService)
  private readonly _FavouriteService=inject(FavouriteService)
  id!:string
  color:boolean=false;
  products!:IproductInfo
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((p)=>{
      
      this.id=p.get("id")!;

    }
  )

   this._FavouriteService.getAllFav().subscribe({
    next:(res)=>{
      console.log("all fav  ; ", res)
      for(let i=0;i<res.length;++i){
        if(res[i].id==this.id){
          this.color=true
        }
      }
    
    },
    error:(err)=>{
      console.log("fav ",err)
    }
   })
   
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
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  addtowishlist(id:number){
      
    if(this.color){
      this.color=false;
      this._FavouriteService.deleteFromFav(id.toString()).subscribe({
        next:(res)=>{
          console.log(res);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
    else{
      this.color=true
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
  orderType(){
    if(this.orderspeed()==true){

      this.orderspeed.set(false);
    }
    else{
      this.orderspeed.set(true)
    }
  }
  

}
