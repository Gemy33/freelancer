import { OrderService } from './../../services/order.service';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { AddressService } from '../../services/address.service';
import { Address } from '../../interfaces/address';
import { log } from 'console';
import { ShopingCostService } from '../../services/shoping-cost.service';
import { CurrencyPipe } from '@angular/common';
// import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-data-for-paying',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './data-for-paying.component.html',
  styleUrl: './data-for-paying.component.scss',
})
export class DataForPayingComponent implements OnInit {
  allItems: any[] = [];
  Data_for_order!: {};
  address_id = signal<number>(0);
  shoping_cost_id = signal<number>(0);

  private readonly _ShopingCostService = inject(ShopingCostService);
  private readonly _OrderService = inject(OrderService);
  // private readonly _ShopingCostService=inject(act)
  ngOnInit(): void {
    console.log(this.ID(), 'cart id : ');

    this._ShopingCostService.getAllCost().subscribe({
      next: (res) => {
        console.log(res);
        this.allItems = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ID = input();
  isClicked = signal(false);
  private readonly AddressService = inject(AddressService);
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
    phoneNumber: new FormControl(null, { validators: [Validators.required] }),
    region: new FormControl(null, { validators: [Validators.required] }),
    addressDetails: new FormControl(null, {
      validators: [Validators.required],
    }),
  });
  onsubmit() {
    console.log('submtoi');
    console.log(this.addressGroup);
    console.log('city id', this.shoping_cost_id());

    this.isClicked.set(true);
    // if (this.addressGroup.invalid) {
    //   this.isClicked.set(false);

    //   return;
    // }

    this.Address.set({
      city: this.addressGroup.get('city')?.value!,
      country: this.addressGroup.get('country')?.value!,
      fullName:
        this.addressGroup.get('fname')?.value +
        this.addressGroup.get('Lname')?.value!,
      phoneNumber: `${this.addressGroup.get('phoneNumber')?.value!}`,
      region: this.addressGroup.get('region')?.value!,
      addressDetails: `${this.addressGroup.get('addressDetails')?.value}`,
    });

    console.log(this.addressGroup);
    console.log(this.Address(), 'all data');
    this.AddressService.addAddress(this.Address()).subscribe({
      next: (res) => {
        this.isClicked.set(false);
        console.log('next', res);
        this.AddressService.getUserAddress().subscribe({
          next: (res) => {
            console.log(res[res.length - 1], 'leats adderess');
            this.address_id.set(res[res.length - 1].id);
            console.log(this.address_id(), 'address id');
            this.Data_for_order = {
              cartId: this.ID(),
              shippingCostId: this.shoping_cost_id(),
              addressId: this.address_id(),
            };
            console.log(this.Data_for_order, 'all data oreder');
            this._OrderService.creatOrder(this.Data_for_order).subscribe({
              next: (res) => {
                console.log(res, 'done');
                this.addressGroup.reset();
              },
              error: (err) => {
                console.log(err, 'er');
              },
            });
          },
          error: (err) => {
            console.log(err, 'err from address');
          },
        });
      },
      error: (err) => {
        this.isClicked.set(false);

        console.log('err', err);
      },
    });

    
  }

  changeId(e: Event) {
    const input = e.target as HTMLInputElement;

    console.log('event value', input);

    this.shoping_cost_id.set(
      this.allItems.find((item) => item.city == input.value).id
    );

    console.log(
      'shoping cost id : ',
      this.allItems.find((item) => item.city == input.value).id
    );
  }
}
