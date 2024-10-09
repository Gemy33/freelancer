import { Component, inject, OnInit } from '@angular/core';
import { SliderComponent } from "../reuseable-components/slider/slider.component";
import { ProductsliderComponent } from "../reuseable-components/productslider/productslider.component";
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';
import { log } from 'console';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, CurrencyPipe ,ProductsliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent implements OnInit {
  all_products:Products[]=[];
  ngOnInit(): void {
    this._ProductsService.allProducts().subscribe({
      next:(res)=>{
        console.log(res);
        this.all_products=res;
        console.log(this.all_products,"dfdf");
        
        
      },
      error:(err)=>{
        console.log(err)
        
      },
    })
  }
  private readonly _ProductsService=inject(ProductsService)
  


}
