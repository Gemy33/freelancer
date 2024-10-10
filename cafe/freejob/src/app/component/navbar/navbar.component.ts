import {
  Component,
  inject,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
<<<<<<< HEAD


// private readonly _AuthService=inject(AuthService)


// onlogout(){
 
//   localStorage.removeItem("userToken");
=======

private readonly _AuthService=inject(AuthService)


// onlogout(){
//   if (typeof window !== 'undefined') {
//        localStorage.removeItem("userToken");
>>>>>>> 98b37d97dcfe41b470e890ee3f4e26c322bff586
  
//      if(localStorage.getItem("userToken")){
//   return true;
//        }
//    else{
//   return false
//         }
//   }
<<<<<<< HEAD
  
private readonly _AuthService = inject(AuthService);
// islogin:boolean=true;

get islogin(){
  return this._AuthService.getStataus();
}

logOut()
{
  this._AuthService.logout();
  this._AuthService.updataIsNotlogin(true);
}
}
=======
//   else{
//     return false;
//   }
// }
>>>>>>> 98b37d97dcfe41b470e890ee3f4e26c322bff586




<<<<<<< HEAD
=======

  // private readonly _AuthService = inject(AuthService);
  // islogin:boolean=true;
  
  get islogin(){
    return this._AuthService.getStataus();
  }

>>>>>>> 98b37d97dcfe41b470e890ee3f4e26c322bff586



  
    

