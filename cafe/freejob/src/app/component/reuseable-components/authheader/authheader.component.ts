import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-authheader',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './authheader.component.html',
  styleUrl: './authheader.component.scss'
})
export class AuthheaderComponent {

}
