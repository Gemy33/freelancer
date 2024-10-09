import { Component } from '@angular/core';
import { SliderComponent } from "../reuseable-components/slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {


}
