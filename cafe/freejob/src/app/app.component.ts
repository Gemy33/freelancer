import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from "./component/navbar/navbar.component";
import { FooterComponent } from "./component/footer/footer.component";
import { LoginComponent } from "./component/login/login.component";
import { ProductInfoComponent } from "./component/product-info/product-info.component";



@Component({
  selector: 'app-root',
  standalone: true,
  

  imports: [RouterOutlet, NavbarComponent, FooterComponent, LoginComponent, ProductInfoComponent],



  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'freejob';
}
