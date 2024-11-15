import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { userdata } from '../../../interfaces/user-data';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-setting',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './user-setting.component.html',
  styleUrl: './user-setting.component.scss'
})
export class UserSettingComponent implements OnInit{
  
  private readonly _UserService=inject(UserService);
  private readonly _AuthService=inject(AuthService);
  private readonly _Router=inject(Router);
  // userInfo!:userdata;
  userInfo=signal<userdata>({}as userdata)
  
  ngOnInit(): void {
    console.log("kajdsfklasldkfhaksjhj")

    this._UserService.getuser().subscribe({
      next:(res)=>{
        console.log(res)
        localStorage.setItem("userInfo",JSON.stringify(res));
        this.userInfo.set(JSON.parse(localStorage.getItem("userInfo") !))
        console.log(this.userInfo());
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  logout(){
    this._AuthService.logout();
    this._Router.navigate(["/تسجيل الدخول"])

    
  }



}
