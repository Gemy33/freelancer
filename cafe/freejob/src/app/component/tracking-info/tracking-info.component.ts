import { Component } from '@angular/core';
import { FixedInfoComponent } from "../reuseable-components/fixed-info/fixed-info.component";
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-tracking-info',
  standalone: true,
  imports: [FixedInfoComponent, ProductComponent],
  templateUrl: './tracking-info.component.html',
  styleUrl: './tracking-info.component.scss'
})
export class TrackingInfoComponent {

}
