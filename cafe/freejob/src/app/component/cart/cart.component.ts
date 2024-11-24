import { Component, inject, OnInit, signal } from '@angular/core';
import { BgFixedComponent } from "../reuseable-components/bg-fixed/bg-fixed.component";
import { FixedInfoComponent } from "../reuseable-components/fixed-info/fixed-info.component";
import { CartService } from '../../services/cart.service';
import { cartproduct } from '../../interfaces/cartproduct';
import { CurrencyPipe, NgClass } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,


  imports: [BgFixedComponent,RouterLink, FixedInfoComponent,CurrencyPipe,NgClass],

  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent  implements OnInit{

   cartp!:cartproduct[]
   
   cartId!:string
   useraddress!:string
   
   orderSammery:any
   emptycart=signal<boolean>(false)

  private readonly _CartService=inject(CartService)
  private readonly _ToastrService=inject(ToastrService)
  ngOnInit(): void {
    this._CartService.getCart().subscribe({
      next:(res)=>{
        this.orderSammery=res.orderSammery
        this.cartId=res.id;
        this.cartp=res.items
        if(this.cartp.length!=0){

          this.emptycart.set(true)
        }
      
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
        this.ngOnInit()
        this._CartService.getCart().subscribe({
          next:(res)=>{
            this.cartId=res.id;
            this.cartp=res.items
            this._ToastrService.info("تم ازاية المنتج من العربة")
            console.log("result : ",res);
            
            console.log("cart",this.cartp)
           this.ngOnInit()
              // location.reload();
            
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
       
        this.ngOnInit()
      },
      error:(err)=>{
        console.log("delete cart err",err)
      }
    })
  }
  paying()
  {
    // console.log(this.deleteCart);
    
  }

  


  

}
