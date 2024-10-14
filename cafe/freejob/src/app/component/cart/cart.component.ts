import { Component, inject, OnInit } from '@angular/core';
import { BgFixedComponent } from "../reuseable-components/bg-fixed/bg-fixed.component";
import { FixedInfoComponent } from "../reuseable-components/fixed-info/fixed-info.component";


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [BgFixedComponent, FixedInfoComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent  {


}
