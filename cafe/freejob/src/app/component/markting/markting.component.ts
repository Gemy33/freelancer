import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { IProduct } from '../../interfaces/categories';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-markting',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './markting.component.html',
  styleUrl: './markting.component.scss'
})
export class MarktingComponent implements OnInit {
  id!:string
  products:IProduct[]=[];
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((p)=>{
      console.log(p.get("Id"));
      this.id=p.get("Id")!;

    }
  )
    this._CategoriesService.get_specific_cat(this.id).subscribe({
      next:(res)=>{
        console.log(res.products);
        this.products=res.products;
        console.log(this.products);
        

        
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }
  private readonly _ActivatedRoute=inject(ActivatedRoute)
  private readonly _CategoriesService =inject(CategoriesService)


}
