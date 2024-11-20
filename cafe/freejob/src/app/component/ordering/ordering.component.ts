import { Component, inject, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-ordering',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './ordering.component.html',
  styleUrl: './ordering.component.scss'
})
export class OrderingComponent implements OnInit{
  private readonly _OrderService=inject(OrderService)
  ngOnInit(): void {
    this._OrderService.GetAllOrdersForUser().subscribe({
      next:(res)=>{
        console.log(res);
        
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
