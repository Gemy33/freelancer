import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {
private readonly _CategoriesService=inject(CategoriesService)
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


