import { Component } from '@angular/core';
import {CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports:[CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    rtl:true,
    pullDrag: true,
    dots: true,
    dotsEach:4,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    margin:40,
    navSpeed: 700,
   
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
       
        items: 3,
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
