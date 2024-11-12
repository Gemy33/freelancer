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

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  private readonly _FavouriteService = inject(FavouriteService);
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
}
