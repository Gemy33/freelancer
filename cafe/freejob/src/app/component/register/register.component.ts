import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FixedInfoComponent } from "../reuseable-components/fixed-info/fixed-info.component";
import { AuthheaderComponent } from "../reuseable-components/authheader/authheader.component";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FixedInfoComponent, AuthheaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly _AuthService=inject(AuthService)
  private readonly _Router=inject(Router)
  msg_error="";
  shown_error=false;
  is_shown:boolean=false;
  is_shown1:boolean=false;


  register:FormGroup=new FormGroup({
    confirmPassword:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.pattern(/^[^@\s]+@[^@\s]+\.[^@\s]+$/),Validators.required]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/)]),
    phoneNumber:new FormControl(null,[Validators.required]),
    userName:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9\-._@+]{5,30}$/)]),

  },{validators:this.passwordMatchValidator})

   passwordMatchValidator(g: AbstractControl) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
       ? null : {'mismatch': true};
 }
  regiser_user(){
    console.log(this.register.value);
    //conact with back-end
    this._AuthService.register(this.register.value).subscribe({

      next:(r)=>{
<<<<<<< HEAD
        console.log("islam token    ",r.token);
        
        if (typeof window !== 'undefined') {
=======
        console.log(r.token);
        localStorage.setItem("userToken",r.token);
        this._AuthService.updataIsNotlogin(false);
        this._AuthService.decode();
       setTimeout(() => {
>>>>>>> 3ff626e5f27bc3639072178adbbdb7c1f3b18f81

        localStorage.setItem("userToken",r.token)
        }
       setTimeout(() => {
        this._Router.navigate(["الصفحة الرئسية"]);    
        this.shown_error=true;
        this.msg_error="Success";
        

      },2000)},
      error:(err)=>{console.log(err);
        this.msg_error=err.error.message;
        this.shown_error=true;

      
 
        }
      }
    )
  }
}
   



    
  
