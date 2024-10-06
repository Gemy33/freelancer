import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FixedInfoComponent } from "../reuseable-components/fixed-info/fixed-info.component";
import { AuthheaderComponent } from "../reuseable-components/authheader/authheader.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FixedInfoComponent, AuthheaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  register:FormGroup=new FormGroup({
    confirmPassword:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required]),
    phoneNumber:new FormControl(null,[Validators.required]),
    userName:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),

  },{validators:this.passwordMatchValidator})

   passwordMatchValidator(g: AbstractControl) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
       ? null : {'mismatch': true};
 }
  regiser_user(){
    console.log(this.register);
    //conact with back-end
  }

}
