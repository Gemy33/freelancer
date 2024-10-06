import { Component } from '@angular/core';
import { BgFixedComponent } from "../reuseable-components/bg-fixed/bg-fixed.component";

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [BgFixedComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {

}
