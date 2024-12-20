import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FixedInfoComponent } from "../reuseable-components/fixed-info/fixed-info.component";
import { AuthheaderComponent } from "../reuseable-components/authheader/authheader.component";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FixedInfoComponent, AuthheaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly _AuthService=inject(AuthService)
  private readonly _ToastrService=inject(ToastrService)
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

        console.log("islam token    ",r.token);
        
      
        console.log(r.token);
        localStorage.setItem("userToken",r.token);
        this._AuthService.updataIsNotlogin(false);
        this._AuthService.decode();
        console.log("user info ", this._AuthService.uer_info_form_token.getValue());
    
       setTimeout(() => {
        this._Router.navigate(["الصفحة الرئسية"]);    
        this.shown_error=true;
        this.msg_error="Success";
        

      },2000)},
      error:(err)=>{
        this._ToastrService.error(err.error.message)
        console.log(err);
        this.msg_error=err.error.message;
        this.shown_error=true;

      
 
        }
      }
    )
  }
}
   



    
  
