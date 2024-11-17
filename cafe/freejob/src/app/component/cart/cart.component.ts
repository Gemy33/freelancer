import { Component, inject, OnInit } from '@angular/core';
import { BgFixedComponent } from "../reuseable-components/bg-fixed/bg-fixed.component";
import { FixedInfoComponent } from "../reuseable-components/fixed-info/fixed-info.component";
import { CartService } from '../../services/cart.service';
import { cartproduct } from '../../interfaces/cartproduct';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [BgFixedComponent, FixedInfoComponent,CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent  implements OnInit{

   cartp!:cartproduct[]
  private readonly _CartService=inject(CartService)
  ngOnInit(): void {
    this._CartService.getCart().subscribe({
      next:(res)=>{
        this.cartp=res.items
        console.log("cart",this.cartp)
      },
      error:(err)=>{
        console.log("err",err)
      }
    })
  }

  

}
