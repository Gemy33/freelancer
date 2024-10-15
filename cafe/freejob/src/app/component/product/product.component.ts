import { Component, Input } from '@angular/core';
import { Products } from '../../interfaces/products';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

 @Input({required:true}) allProduct:Products[]=[];
 @Input({required:true}) favourit:boolean=false;

}
