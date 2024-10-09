import { Component } from '@angular/core';
import { SliderComponent } from "../reuseable-components/slider/slider.component";
import { ProductsliderComponent } from "../reuseable-components/productslider/productslider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, ProductsliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {


}
