import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { decode } from 'punycode';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-user-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-password.component.html',
  styleUrl: './user-password.component.scss'
})
export class UserPasswordComponent  {
  isloading=signal<boolean>(false);
  show=signal<number>(0);
  
  private readonly _AuthService=inject(AuthService)
  private readonly _PasswordService=inject(PasswordService)
 email=signal<string>("");
    
      
    
 
  // codeform:FormGroup=new FormGroup({
  //   code:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(6)])
  // })
  // passwdform:FormGroup=new FormGroup({
  //   password:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
  //   repassword:new FormControl(null),
  // },{validators:this.mismatch})

  // mismatch(g:AbstractControl){
  //   if(g.get("password")?.value==g.get("repassword")?.value){
  //     return null;
  //   }
  //   else{
  //     return {mismatch:true};
  //   }
  // }









  formgroup:FormGroup=new FormGroup({
    oldPassword:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
    newPassword:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
    confirmPassword:new FormControl(null,[Validators.required])
  },{validators:this.submitPassword})
  submitPassword(g:AbstractControl){
    if(g.get("newpass")?.value==g.get("repass")?.value){
      return null;
    }
    else{
      return {mismatch:"true"}
    }
  }
  onSubmit(){
    if(this.formgroup.valid){
      this.isloading.set(true);
       
      this._PasswordService.changePassword(this.formgroup.value).subscribe({
        next:(res)=>{
          console.log(res);
          this.isloading.set(false); 
          this.formgroup.reset();
        },
        error:(err)=>{  
          console.log(err);
          this.isloading.set(false); 
        }
      })
      

      console.log("submited!!")
      console.log(this.formgroup)
    }
    else{
      this.formgroup.markAllAsTouched();
    }
  }
 

}
