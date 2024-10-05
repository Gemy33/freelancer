import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { NavbarComponent } from "./component/navbar/navbar.component";
=======
import { ProductsComponent } from './products/products.component';
>>>>>>> 0e054d2967db810aa48aacddf4b4917f638df536

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, NavbarComponent],
=======
  imports: [RouterOutlet,ProductsComponent],
>>>>>>> 0e054d2967db810aa48aacddf4b4917f638df536
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'freejob';
}
