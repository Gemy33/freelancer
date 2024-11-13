import { Component, signal, Signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-password.component.html',
  styleUrl: './user-password.component.scss'
})
export class UserPasswordComponent {
  isloading=signal<boolean>(false);

  formgroup:FormGroup=new FormGroup({
    oldpass:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
    newpass:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
    repass:new FormControl(null,[Validators.required])
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

      console.log("submited!!")
      console.log(this.formgroup)
    }
    else{
      this.formgroup.markAllAsTouched();
    }
  }

}
