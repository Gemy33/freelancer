import { Token } from '@angular/compiler';
import { Component, inject, OnInit } from '@angular/core';
import { SliderComponent } from '../reuseable-components/slider/slider.component';
import { ProductsliderComponent } from '../reuseable-components/productslider/productslider.component';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';
import { CurrencyPipe } from '@angular/common';
import { FavouriteService } from '../../services/favourite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, CurrencyPipe, ProductsliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly _ProductsService = inject(ProductsService);
  private readonly _FavouriteService = inject(FavouriteService);
  private readonly _Router = inject(Router);

  all_products: Products[] = [];
  ngOnInit(): void {
    this._ProductsService.allProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.all_products = res;
        console.log(this.all_products, 'dfdf');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addFav(id: number) {
    // console.log("id",id.toString())
    if (!localStorage.getItem('userToken')) {
      this._Router.navigate(['تسجيل الدخول']);
    }


    // this._FavouriteService.addToFav(id.toString()).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }
}
