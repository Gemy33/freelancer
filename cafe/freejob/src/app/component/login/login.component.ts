import { Component, inject, signal } from '@angular/core';
import {  FormBuilder,  FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FixedInfoComponent } from "../reuseable-components/fixed-info/fixed-info.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthheaderComponent } from "../reuseable-components/authheader/authheader.component";



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, FixedInfoComponent, AuthheaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly _FormBuilder=inject(FormBuilder)

  loginForm:FormGroup=this._FormBuilder.group({
    emailOrUserName:[null,[Validators.required,Validators.email ]],//must get validation from back end dont forget that
    password:[null,[Validators.required,Validators.minLength(6),Validators.maxLength(25)]]
  })
  spinner=signal<boolean>(false);
  onsendrequest=signal<boolean>(false);
  OnSubmit(){
    if(this.loginForm.valid){
      this.onsendrequest.set(true);

     this.spinner.set(true);
      console.log(this.loginForm)
    }
    else{
      this.loginForm.markAllAsTouched();
    }
  }
}


// [A-Za-z0-9\._%+\-]+@gmail+\.[A-Za-z]{2,3}