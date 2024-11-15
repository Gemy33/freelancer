import {
  Component,
  inject,

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
private readonly _AuthService = inject(AuthService);


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(localStorage.getItem("userToken")){
      this._AuthService.isNotlogin.set(false);

    }
  }


// private readonly _AuthService=inject(AuthService)


// onlogout(){
 
//   localStorage.removeItem("userToken");


// private readonly _AuthService=inject(AuthService)


// onlogout(){
//   if (typeof window !== 'undefined') {
//        localStorage.removeItem("userToken");

  
//      if(localStorage.getItem("userToken")){
//   return true;
//        }
//    else{
//   return false
//         }
//   }

  
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







  // private readonly _AuthService = inject(AuthService);
  // islogin:boolean=true;
  
  




  
    

