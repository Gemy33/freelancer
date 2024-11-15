import { Component, inject, OnInit, output } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from '../../../services/categories.service';
import { RouterLink } from '@angular/router';
import { ProductComponent } from "../../product/product.component";
import { Products } from '../../../interfaces/products';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule, RouterLink, ProductComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {
private readonly _CategoriesService=inject(CategoriesService)
private readonly _ProductsService=inject(ProductsService)
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    rtl:true,
    pullDrag: true,
    dots: false,
    dotsEach:4,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    margin:5,
    navSpeed: 700,
   
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
       
        items: 2,
      },
      740: {
       
        items: 3,
      },
      940: {
       
        items: 3,
      }
    },
    nav: true
  }
  
 
  categories!:any[]
  sendData(id:string){
    
    this._CategoriesService.get_specific_cat(id).subscribe({
      next:(res)=>{
        console.log("ljdlkfjlsdkajf;lkjsdflkj;lj",res)
        this._ProductsService.specproducts.set(res.products)
        // location.reload();
        
      },
      error:(err)=>{
        console.log(err);
      }
    })


  }

  ngOnInit(): void {
  
    this._CategoriesService.getAllCategories().subscribe({
      next:(res)=>{
        console.log(res)
        this.categories=res
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


}


