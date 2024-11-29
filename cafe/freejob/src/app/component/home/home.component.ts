import { Token } from '@angular/compiler';
import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { SliderComponent } from '../reuseable-components/slider/slider.component';
import { ProductsliderComponent } from '../reuseable-components/productslider/productslider.component';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';
import { CurrencyPipe } from '@angular/common';

import { RouterLink, RouterLinkActive } from '@angular/router';

import { FavouriteService } from '../../services/favourite.service';
import { Router } from '@angular/router';
import { ProductComponent } from "../product/product.component";
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, CurrencyPipe, ProductsliderComponent, RouterLink, RouterLinkActive, ProductComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly _ProductsService = inject(ProductsService);
  private readonly _FavouriteService = inject(FavouriteService);
  private readonly _CategoriesService = inject(CategoriesService);
  private readonly _Router = inject(Router);
  
  spceproducts=computed(()=>  this._ProductsService.specproducts() )
  // spceproducts=signal<Products[]>()
  

  all_products: Products[] = [];
  ngOnInit(): void {
    
    this._ProductsService.allProducts().subscribe({
      next: (res) => {
        this.all_products = res;
      },
      error: (err) => {
      },
    });
  }
  addFav(id: number) {
    if (!localStorage.getItem('userToken')) {
      this._Router.navigate(['تسجيل الدخول']);
    }

    


  }
}
