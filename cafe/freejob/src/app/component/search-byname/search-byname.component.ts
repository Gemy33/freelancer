import { Component, inject, OnInit, signal } from '@angular/core';
import { BgFixedComponent } from "../reuseable-components/bg-fixed/bg-fixed.component";
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';
import { ProductComponent } from "../product/product.component";
import { FormsModule, NgModel } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-byname',
  standalone: true,
  imports: [ProductComponent,FormsModule],
  templateUrl: './search-byname.component.html',
  styleUrl: './search-byname.component.scss'
})
export class SearchBynameComponent implements OnInit {
  name=signal<string>('');
  ngOnInit(): void {
    this._ProductsService.allProducts().subscribe({
      next:(res)=>{
        console.log(res);
        this.allProduct=res
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  allProduct:Products[]=[];
  private readonly _ProductsService=inject(ProductsService)
  search()
  {
    console.log(this.name());
    console.log("hhhh");
    this._ProductsService.searchByName(this.name()).subscribe({
      next:(value) =>{
        console.log(value);
        this.allProduct=value;
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
    
  }
  

}
