import { CartService } from './../../services/cart.service';
import { AfterContentInit, Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IproductInfo } from '../../interfaces/products';
import { CurrencyPipe, NgClass } from '@angular/common';
import { FavouriteService } from '../../services/favourite.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { sign } from 'node:crypto';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, RouterLink, NgClass],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss',
})
export class ProductInfoComponent {
  x = signal<boolean>(false);

  orderspeed = signal<boolean>(false);

  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _ToastrService = inject(ToastrService);
  private readonly _ProductsService = inject(ProductsService);
  private readonly _FavouriteService = inject(FavouriteService);
  id!: string;
  color: boolean = false;
  products!: IproductInfo;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((p) => {
      this.id = p.get('id')!;
    });

    if (
      localStorage.getItem('userToken') &&
      typeof localStorage !== undefined
    ) {
      this._FavouriteService.getAllFav().subscribe({
        next: (res) => {
          for (let i = 0; i < res.length; ++i) {
            if (res[i].id == this.id) {
              this.color = true;
            }
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }

    this._ProductsService.specificProduct(this.id).subscribe({
      next: (res) => {
        this.products = res;
        this.x.set(true);
      },
      error: (err) => {},
    });
  }

  colorc = signal<string>('');

  border(color: string) {
    this.colorc.set(color);
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  addtowishlist(id: number) {
    if (localStorage.getItem('userToken')) {
      if (this.color) {
        this.color = false;
        this._FavouriteService.deleteFromFav(id.toString()).subscribe({
          next: (res) => {
            this._ToastrService.error('تم الازاله من المفصله');
          },
          error: (err) => {},
        });
      } else {
        this.color = true;
        this._FavouriteService.addToFav(id.toString()).subscribe({
          next: (res) => {
            this._ToastrService.success('تم الاضافه الي المفضله');
          },
          error: (err) => {},
        });
      }
    } else {
      this._ToastrService.error('يجب تسجيل الدخول');
    }
  }
  orderType(value: string) {
    if (this.orderspeed() == true) {
      this.orderspeed.set(false);
    } else {
      this.orderspeed.set(true);
    }
    this.type.set(value);
  }
  private CartService = inject(CartService);
  cart_info = signal<{}>({});
  q: any = 1;
  type = signal<string>('مستعجل');
  dateValue = signal('');
  photoValue = signal<FileList>({} as FileList);
  pdfValue = signal<File>({} as File);

  showPdf(e: Event) {
    const inputPdf = e.target as HTMLInputElement;
    if (inputPdf.files && inputPdf.files?.length !== 0) {
      this.pdfValue.set(inputPdf.files[0]);
    }
  }
  showPhoto(e: Event) {
    const inputPhoto = e.target as HTMLInputElement;

    if (inputPhoto.files && inputPhoto.files?.length !== 0) {
      this.photoValue.set(inputPhoto.files);
    }
  }

  _Router = inject(Router);
  addToCart(id: number) {
    if(!localStorage.getItem('userToken'))
    {
      this._Router.navigate(['/تسجيل الدخول']);
    }

    const hamada = new FormData();
    hamada.append('ProductId', this.id);
    hamada.append('Type', this.type());
    hamada.append('Color', this.colorc());
    hamada.append('Quantity', this.q);
    hamada.append('Date', this.dateValue());
    hamada.append('FilePdf', this.pdfValue());
    if (this.photoValue()) {
      for (let i = 0; i < this.photoValue().length; i++) {
        hamada.append('Photos', this.photoValue()[i]); // Append each file individually
      }

      this.CartService.addToCart(hamada).subscribe({
        next: (res) => {
          console.log('hamada result ', res);
          this._ToastrService.success('تم الاضافه الي العربه');
        },
        error: (err) => {
          console.log(err);
          // this._ToastrService.error(err.error.message);
        
        },
      });
    }
    // hamada.forEach((key,value)=>{
    //   console.log(key ,"key:",value);

    // });
  }
  updateCount(n: number) {
    if (this.q == 1 && n < 0) {
      this._ToastrService.error('الحد الادني للاضافة الي العربه 1');
    } else if (n > 0) {
      this.q += 1;
    } else if (n < 0) {
      this.q -= 1;
    }
  }
}
