import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FixedInfoComponent } from '../reuseable-components/fixed-info/fixed-info.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthheaderComponent } from '../reuseable-components/authheader/authheader.component';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    FixedInfoComponent,
    AuthheaderComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthService = inject(AuthService);
  private readonly _ToastrService= inject(ToastrService);
  private readonly _Router = inject(Router);
  loginForm: FormGroup = this._FormBuilder.group({
    emailOrUserName: [null, [Validators.required, Validators.email]], //must get validation from back end dont forget that
    password: [
      null,
      [Validators.required, Validators.minLength(5), Validators.maxLength(25)],
    ],
  });
  spinner = signal<boolean>(false);
  onsendrequest = signal<boolean>(false);
  error = signal<string>('');
  iserror = signal<boolean>(false);

  OnSubmit() {
    if (this.loginForm.valid) {
      this.onsendrequest.set(true);
      localStorage.setItem("email",this.loginForm.get("emailOrUserName")?.value);

      this._AuthService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (typeof localStorage != 'undefined') {
            localStorage.setItem('userToken', res.token);
            this._AuthService.updataIsNotlogin(false);
          }
          this._AuthService.decode();
          
          
          this.onsendrequest.set(false);
          this.spinner.set(false);
          this.iserror.set(false);

          this._Router.navigate(['/الصفحة الرئسية']);
        },
        error: (err) => {
          //error
          this._ToastrService.error(err.error.message)
          console.log(err);
          this.iserror.set(true);
          this.error.set(err.error.message);

          this.onsendrequest.set(false);
          this.spinner.set(false);
        },
      });

      this.spinner.set(true);
      console.log(this.loginForm);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}

// [A-Za-z0-9\._%+\-]+@gmail+\.[A-Za-z]{2,3}
