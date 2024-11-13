import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './personal-page.component.html',
  styleUrl: './personal-page.component.scss'
})
export class PersonalPageComponent {
  isloading=signal<boolean>(false);
  formgroup:FormGroup=new FormGroup({
    fname:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    lname:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    emali:new FormControl(null,[Validators.required,Validators.email]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(5), Validators.maxLength(25)]),
  })

  onSubmit():void{
    if(this.formgroup.valid){
      this.isloading.set(true);

      console.log(this.formgroup);
      //here call api and update user information
    }
    else{
      this.formgroup.markAllAsTouched();
    }
  }



}
