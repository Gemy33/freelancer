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

private readonly _AuthService=inject(AuthService)


onlogout(){
  if (typeof window !== 'undefined') {
       localStorage.removeItem("userToken");
  
     if(localStorage.getItem("userToken")){
  return true;
       }
   else{
  return false
        }
  }
  else{
    return false;
  }
}




=======
  private readonly _AuthService = inject(AuthService);
  // islogin:boolean=true;
  
  get islogin(){
    return this._AuthService.getStataus();
  }
>>>>>>> 3ff626e5f27bc3639072178adbbdb7c1f3b18f81

  logOut()
  {
    this._AuthService.logout();
    this._AuthService.updataIsNotlogin(true);
  }


  
    
}
