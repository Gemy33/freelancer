import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { OrderService } from '../../services/order.service';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-ordering',
  standalone: true,
  imports: [CurrencyPipe,NgClass],
  templateUrl: './ordering.component.html',
  styleUrl: './ordering.component.scss'
})
export class OrderingComponent implements OnInit{
  private readonly _OrderService=inject(OrderService)
  orderspeed=signal<number>(1)
  productOrder=signal<any[]>([] as any)
  ngOnInit(): void {
    this._OrderService.GetAllOrdersForUser().subscribe({
      next:(res)=>{
        this.productOrder.set(res)
        console.log(this.productOrder());
        
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }
  orderStatus(id:number){
    this._OrderService.getSpecOrder(id).subscribe({
      next:(res)=>{
        console.log(res,"resultdfjalkjlk")
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }
  traking(orderid:number){

  }
  orderType(n:number){
    this.orderspeed.set(n);
    if(this.orderspeed()==1){
      this.productOrder.set(this.productOrder().filter((item)=>item.status=="قيد المعاينة"))
    }
    else if(this.orderspeed()==2){

      this.productOrder.set(this.productOrder().filter((item)=>item.status=="تم التسليم"))
    }
    else if(this.orderspeed()==3){

      this.productOrder.set(this.productOrder().filter((item)=>item.status=="تم الالغاء"))
    }


  }

}
