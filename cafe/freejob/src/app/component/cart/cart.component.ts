import { Component, inject, OnInit } from '@angular/core';
import { BgFixedComponent } from "../reuseable-components/bg-fixed/bg-fixed.component";
import { FixedInfoComponent } from "../reuseable-components/fixed-info/fixed-info.component";
import { CartService } from '../../services/cart.service';
import { cartproduct } from '../../interfaces/cartproduct';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [BgFixedComponent, FixedInfoComponent,CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent  implements OnInit{

   cartp!:cartproduct[]
   
   cartId!:string
   orderSammery:any
  private readonly _CartService=inject(CartService)
  private readonly _ToastrService=inject(ToastrService)
  ngOnInit(): void {
    this._CartService.getCart().subscribe({
      next:(res)=>{
        this.orderSammery=res.orderSammery
        this.cartId=res.id;
        this.cartp=res.items
        console.log("result : ",res);
        
        console.log("cart",this.cartp)
      },
      error:(err)=>{
        console.log("err",err)
      }
    })
  }
  removeItem(itemId:string,cartId:string){
    this._CartService.removeItemFromCart(itemId,cartId).subscribe({
      next:(res)=>{
        console.log("remove result ; ",res);
        this._CartService.getCart().subscribe({
          next:(res)=>{
            this.cartId=res.id;
            this.cartp=res.items
            this._ToastrService.info("تم ازاية المنتج من العربة")
            console.log("result : ",res);
            
            console.log("cart",this.cartp)
            location.reload();
          },
          error:(err)=>{
            console.log("err",err)
          }
        })
      },
      error:(err)=>{
        console.log("error :  ",err)
      }
    })
  }
  deleteCart(){
    this._CartService.deleteCart(this.cartId).subscribe({
      next:(res)=>{
       
        location.reload();
      },
      error:(err)=>{
        console.log("delete cart err",err)
      }
    })
  }

  

}
