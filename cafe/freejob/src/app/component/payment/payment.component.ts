import { Component } from '@angular/core';
import { BgFixedComponent } from "../reuseable-components/bg-fixed/bg-fixed.component";
import { FixedInfoComponent } from "../reuseable-components/fixed-info/fixed-info.component";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [BgFixedComponent, FixedInfoComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

}
