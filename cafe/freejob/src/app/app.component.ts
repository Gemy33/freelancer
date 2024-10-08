import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';

import { NavbarComponent } from "./component/navbar/navbar.component";
import { FooterComponent } from "./component/footer/footer.component";
import { LoginComponent } from "./component/login/login.component";
import { ProductInfoComponent } from "./component/product-info/product-info.component";
import { ProductsliderComponent } from "./component/reuseable-components/productslider/productslider.component";
import { sliderComponent } from "./component/slider/slider.component";



@Component({
  selector: 'app-root',
  standalone: true,
  

  imports: [RouterOutlet, NavbarComponent, FooterComponent, LoginComponent, ProductInfoComponent, ProductsliderComponent, sliderComponent],



  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'freejob';
  
  
}
