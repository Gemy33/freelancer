import { Component } from '@angular/core';
import { UserSettingComponent } from "../reuseable-components/user-setting/user-setting.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [UserSettingComponent,RouterOutlet],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {

}
