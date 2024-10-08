import { Component } from '@angular/core';
import { sliderComponent } from "../slider/slider.component";
// import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  // imports: [SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [sliderComponent]
})
export class HomeComponent {

}
