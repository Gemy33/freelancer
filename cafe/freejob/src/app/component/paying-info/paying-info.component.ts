import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-paying-info',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './paying-info.component.html',
  styleUrl: './paying-info.component.scss'
})
export class PayingInfoComponent {

  payingGroup=new FormGroup({
    city:new FormControl(null,{validators:[Validators.required]}) ,
    country:new FormControl('مصر',{validators:[Validators.required]}) ,
    fullName: new FormControl(null,{validators:[Validators.required]}) ,
    phoneNumber: new FormControl(null,{validators:[Validators.required]}) ,
    region: new FormControl(null,{validators:[Validators.required]}) ,
    addressDetails:new FormControl(null,{validators:[Validators.required]})
   

  })
  onsend()
  {
    console.log(this.payingGroup.value);
    
  }

}
