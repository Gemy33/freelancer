import { Component, inject, OnInit } from '@angular/core';
// import { UserSettingComponent } from "../reuseable-components/user-setting/user-setting.component";
import { RouterLink } from '@angular/router';
import { userdata } from '../../interfaces/user-data';
import { UserService } from '../../services/user.service';
import { json } from 'stream/consumers';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-acount-overview',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './acount-overview.component.html',
  styleUrl: './acount-overview.component.scss'
})
export class AcountOverviewComponent  {
 private readonly _UserService=inject(UserService) 
 userInfo!:userdata
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userInfo=JSON.parse(localStorage.getItem("userInfo")!)
    console.log(" ladkfl;skdjk",this.userInfo)
  } 
  urlform:FormGroup=new FormGroup({
    url:new FormControl(null)
  })

  // changeProfile(event:Event){
  //   const target = event.target as HTMLInputElement;
  //   console.log(target)
  //   if (target.files && target.files.length > 0) {
  //       console.log(target.files[0].name);
  //   }
  //   console.log("url if ",this.urlform.get("url"))
  //   this._UserService.changeProfile(this.urlform.get("url")?.value).subscribe({
  //     next:(res)=>{
  //       console.log(res);
  //     },
  //     error:(err)=>{
  //       console.log(err)
  //     }
  //   })
  // }

}
