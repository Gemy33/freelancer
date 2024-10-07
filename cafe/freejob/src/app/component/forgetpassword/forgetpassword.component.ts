import { Component, inject, signal } from '@angular/core';
import {  AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordService } from '../../services/password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {
 

  private readonly _PasswordService=inject(PasswordService)
  private readonly _Router=inject(Router)
  
  page=signal<number>(1);
  good=signal<boolean>(false);
  spinner=signal<boolean>(false);
  error=signal<boolean>(false);
  emailmessage=signal<string>("");
  iserror=signal<boolean>(false);







enterEmailForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email])
})
entercode:FormGroup=new FormGroup({
  code:new FormControl(null,[Validators.required,Validators.minLength(4)]),
  email:new FormControl(localStorage.getItem("userEmail"))
})
resetpassword:FormGroup=new FormGroup({
  newPassword:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(25)]),
  email:new FormControl(localStorage.getItem("userEmail")),
  confirmPassword:new FormControl(null,[Validators.required])
},{validators:this.passwordMatchValidator})





  onSubmit():void{
    if(this.enterEmailForm.valid){
      this.spinner.set(true)
      localStorage.setItem("userEmail",this.enterEmailForm.get("email")?.value)
      this._PasswordService.sendemail(this.enterEmailForm.value).subscribe({
        next:(res)=>{
          console.log(res)
          this.good.set(true);
          setTimeout(() => {
            this.page.set(2);
          }, 3000);
          this.spinner.set(false)
          
          
        },
        error:(err)=>{
          this.emailmessage.set(err.error.message);
          this.error.set(true)
          this.iserror.set(true);
          this.spinner.set(false)

          console.log(err)
        }
      })
    }
    else{
      this.enterEmailForm.markAllAsTouched();
    }
  }
  verifyCode(){
    if(this.entercode.valid){
      this.spinner.set(true)

      this._PasswordService.sendcode(this.entercode.value).subscribe({
        next:(res)=>{
          console.log(res)
          this.good.set(false);
            this.page.set(3);
          this.spinner.set(false)
          
          
        },
        error:(err)=>{
          this.emailmessage.set(err.error.message);
          this.error.set(true)
          this.iserror.set(true);
          this.spinner.set(false)

          console.log(err)
        }
      })
    }
    else{
      this.entercode.markAllAsTouched();
    }
  }
  passwordMatchValidator(g: AbstractControl) {
    return g.get('newPassword')?.value === g.get('confirmPassword')?.value
       ? null : {'mismatch': true};
 }
 ResetPassword(){
  if(this.resetpassword.valid){
   this.spinner.set(true)
    this._PasswordService.resetPassword(this.resetpassword.value).subscribe({
      next:(res)=>{
        this.spinner.set(false)
        console.log(res)
        this.good.set(true);
       
        setTimeout(() => {
          this._Router.navigate(["/الصفحة الرئسية"]); //must here navigate user to the place was take action on it
       
        }, 2000);


      },
      error:(err)=>{
        this.iserror.set(true);
        this.emailmessage.set(err.error.message)
         this.spinner.set(false)

        console.log(err)
      },
    })
   }
   else{
    this.resetpassword.markAllAsTouched();
   }
  }

}
