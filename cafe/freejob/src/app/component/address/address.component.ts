import { AddressService } from './../../services/address.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Address } from '../../interfaces/address';
import { fail } from 'node:assert';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent {
  userId = signal<number>(1);
  isClicked = signal(false);
  private readonly AddressService = inject(AddressService);
  private readonly ToastrService = inject(ToastrService);
  Address = signal<Address>({} as Address);
  addressGroup = new FormGroup({
    city: new FormControl('بني سويف', { validators: [Validators.required] }),
    country: new FormControl('مصر', { validators: [Validators.required] }),
    fname: new FormControl(null, {
      validators: [Validators.required, Validators.minLength(5)],
    }),
    Lname: new FormControl(null, {
      validators: [Validators.required, Validators.minLength(5)],
    }),
    // fullName: new FormControl(null,{validators:[Validators.required]}) ,
    phoneNumber: new FormControl(null, { validators: [Validators.required] }),
    region: new FormControl(null, { validators: [Validators.required] }),
    // addressDetails:new FormControl(null,{validators:[Validators.required]})/
  });
  onsubmit() {
    this.isClicked.set(true);
    if (this.addressGroup.invalid) {
      this.isClicked.set(false);

      return;
    }
    this.AddressService.getUserAddress().subscribe({
      next: (res) => {
        this.userId.set(res[0].id);
        console.log(this.userId(), 'idljkjk');

        console.log('user add', res[0]);
      },
    });
    this.Address.set({
      id: this.userId(),
      city: this.addressGroup.get('city')?.value!,
      country: this.addressGroup.get('country')?.value!,
      fullName:
        this.addressGroup.get('fname')?.value +
        this.addressGroup.get('Lname')?.value!,
      phoneNumber: `${this.addressGroup.get('phoneNumber')?.value!}`,
      region: this.addressGroup.get('region')?.value!,
      addressDetails: '',
    });
    console.log(this.Address(), 'address');

    this.AddressService.updataAddress(this.Address()).subscribe({
      next: (res) => {
        console.log(res, 'next here');
        this.ToastrService.success(res.message);

        this.isClicked.set(false);
      },
      error: (err) => {
        this.isClicked.set(false);

        console.log(err, 'error');
      },
    });
    this.addressGroup.reset();

    console.log(this.addressGroup);
    console.log(this.Address());
  }
  
}
