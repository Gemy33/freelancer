import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { IProduct } from '../../interfaces/categories';
import { CurrencyPipe } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-markting',
  standalone: true,
  imports: [ ProductComponent],
  templateUrl: './markting.component.html',
  styleUrl: './markting.component.scss'
})
export class MarktingComponent implements OnInit {
  private readonly _ActivatedRoute=inject(ActivatedRoute)
  private readonly _CategoriesService =inject(CategoriesService)
  private readonly _ProductsService=inject(ProductsService)
  id!:string
  products:IProduct[]=[];
  ngOnInit(): void {
   
  
   
     this._ProductsService.allProducts().subscribe({
    next:(res)=>{
      this.products=res
    },
    error:(err)=>{
    }
    })
  
  
  }
  


}
