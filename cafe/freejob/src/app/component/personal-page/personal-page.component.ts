import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { updateuesr } from '../../interfaces/user-data';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-personal-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './personal-page.component.html',
  styleUrl: './personal-page.component.scss'
})
export class PersonalPageComponent  {

  private readonly _UserService=inject(UserService)
  

  isloading=signal<boolean>(false);
  formgroup:FormGroup=new FormGroup({
    fname:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    lname:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    emali:new FormControl(null,[Validators.required,Validators.email]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    // password:new FormControl(null,[Validators.required,Validators.minLength(5), Validators.maxLength(25)]),
  })
  newUserInfo!:updateuesr
  
  onSubmit():void{
    if(this.formgroup.valid){

      this.isloading.set(true);
      this.newUserInfo={
        "userName":this.formgroup.get("fname")?.value + " " +this.formgroup.get("lname")?.value,
        "phoneNumber":this.formgroup.get("phone")?.value,
        "email":this.formgroup.get("emali")?.value 
      }
      this._UserService.updateuserInfo(this.newUserInfo).subscribe({
        next:(res)=>{
          console.log(res);
          this.isloading.set(false);
          this._UserService.getuser().subscribe({
            next:(res)=>{
              console.log(res);
              localStorage.setItem("userInfo",JSON.stringify(res))
            }
          })

          this.formgroup.reset();
          //to reload the page to update the old data to new data
          location.reload();

        },
        error:(err)=>{
          console.log(err);
        }
      })



      // console.log(this.formgroup.value);
      //here call api and update user information
    }
    else{
      this.formgroup.markAllAsTouched();
    }
  }



}
