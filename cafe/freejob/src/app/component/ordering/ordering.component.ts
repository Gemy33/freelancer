import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-ordering',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './ordering.component.html',
  styleUrl: './ordering.component.scss'
})
export class OrderingComponent {

}
