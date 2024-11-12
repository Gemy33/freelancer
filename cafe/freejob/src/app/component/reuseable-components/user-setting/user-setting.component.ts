import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user-setting',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './user-setting.component.html',
  styleUrl: './user-setting.component.scss'
})
export class UserSettingComponent {

}
