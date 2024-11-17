import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SliderComponent } from "../slider/slider.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productslider',
  standalone: true,
  imports: [CarouselModule ,RouterLink ],
  templateUrl: './productslider.component.html',
  styleUrl: './productslider.component.scss'
})
export class ProductsliderComponent {
 



  images:any[]=[
    {img:"../../../../assets/image/productslider1.png"},
    {img:"../../../../assets/image/productslider2.png"},
    {img:"../../../../assets/image/productslider1.png"},
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    rtl:true,
    pullDrag: true,
    dots: true,
    dotsEach:2,
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
}


