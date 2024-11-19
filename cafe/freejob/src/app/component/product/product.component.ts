import {
  Component,
  ElementRef,
  inject,
  Input,
  signal,
  ViewChild,
} from '@angular/core';
import { Products } from '../../interfaces/products';
import { Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FavouriteService } from '../../services/favourite.service';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  private readonly _FavouriteService = inject(FavouriteService);
  private readonly _ToastrService = inject(ToastrService);
  private readonly _CartService= inject(CartService);
  ID = signal<number>(0);
  @Input({ required: true }) allProduct: Products[] = [];
  @Input({ required: true }) favourit: boolean = false;
  @ViewChild('areSure') hideAlert?: HTMLElement;
  onclick(event: MouseEvent, id: number) {
    this.ID.set(id);
  }
  remove() {
    this._FavouriteService.deleteFromFav(this.ID().toString()).subscribe({
      next: (res) => {
        window.location.reload();
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  notremove() {
    window.location.reload();
    // this.hideAlert?.classList.remove('d-flex');
    // this.hideAlert?.classList.add('d-none')
    // console.log(this.hideAlert?.classList);
    

    //   if(this.hideAlert?.classList.add('done'))
  }
  // ------------------------------------------------------------
 
  addToCart(product:any){
     let count:any=1
    const hamada=new FormData();
    hamada.append("ProductId",product.id)
    hamada.append("Type","مستعجل");
    //must here send the color like in img
    hamada.append("Color","#22656");
    hamada.append("Quantity",count);
    this._CartService.addToCart(hamada).subscribe({
      next:(res)=>{
        console.log(res);
        this._ToastrService.success(res.message)
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  
}
