import { Component, inject, OnInit, signal } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CurrencyPipe, NgClass } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ordering',
  standalone: true,
  imports: [CurrencyPipe, NgClass],
  templateUrl: './ordering.component.html',
  styleUrl: './ordering.component.scss',
})
export class OrderingComponent implements OnInit {
  private readonly _OrderService = inject(OrderService);
  private readonly _ToastrService = inject(ToastrService);

  orderspeed = signal<number>(0);
  productOrder1 = signal<any[]>([] as any);
  productOrder2 = signal<any[]>([] as any);
  productOrder3 = signal<any[]>([] as any);
  productOrder = signal<any[]>([] as any);
  ngOnInit(): void {
    this._OrderService.GetAllOrdersForUser().subscribe({
      next: (res) => {
        this.productOrder1.set(res);
        this.productOrder2.set(res);
        this.productOrder3.set(res);
        this.productOrder.set(res);
        console.log(this.productOrder1(), 'befor');
        this.productOrder1.set(
          this.productOrder1().filter((i) => i.status == 'قيد المعاينة')
        );
        this.productOrder3.set(
          this.productOrder3().filter((i) => i.status == 'تم الالغاء')
        );
        this.productOrder2.set(
          this.productOrder2().filter((i) => i.status == 'تم التسليم')
        );
       
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  orderStatus(id: number) {
    this._OrderService.getSpecOrder(id).subscribe({
      next: (res) => {
        console.log(res, 'resultdfjalkjlk');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  traking(orderid: number) {}
  orderType(n: number) {
    this.orderspeed.set(n);
  }
  reorder(id: number) {
    this._OrderService.reorder(id).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message);
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  cancle_order(id: number) {
    // console.log(this.productOrder1()[0].id,"::",this.productOrder1());

    console.log(id);

    this._OrderService.cancle_order(id).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message);
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  delete_order(id: number) {
    // console.log(this.productOrder1()[0].id,"::",this.productOrder1());

    console.log(id);

    this._OrderService.delete_order(id).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message);
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
