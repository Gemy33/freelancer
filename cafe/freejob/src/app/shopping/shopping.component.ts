import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {
 @Input() tital!:string
 
}
