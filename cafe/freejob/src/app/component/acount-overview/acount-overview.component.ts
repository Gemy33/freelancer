import { Component, inject } from '@angular/core';
// import { UserSettingComponent } from "../reuseable-components/user-setting/user-setting.component";
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { userdata } from '../../interfaces/user-data';
import { UserService } from '../../services/user.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-acount-overview',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './acount-overview.component.html',
  styleUrl: './acount-overview.component.scss',
})
export class AcountOverviewComponent {
  private readonly _UserService = inject(UserService);
  selectedFile!: File;

  private readonly _ToastrService = inject(ToastrService);
  private readonly _Router = inject(Router);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  userInfo!: userdata;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userInfo = JSON.parse(localStorage.getItem('userInfo')!);
    console.log(' ladkfl;skdjk', this.userInfo.image);
  }
 
  onsend(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      console.error('No file selected!');
      return;
    }

    this.selectedFile = input.files[0];
    console.log('Selected file:', this.selectedFile);

    const formData = new FormData();
    formData.append('Image', this.selectedFile);

    // Debug FormData
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    // Send request
    this._UserService.changeProfile(formData).subscribe({
      next: (res) => {
        console.log('Success:', res);
        this._ToastrService.success(res.message);
        this._UserService.getuser().subscribe({
          next: (res) => {
            localStorage.setItem("userInfo",JSON.stringify(res));
          },
        });
      
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      error: (err) => console.error('Error:', err),
    });
  }
}
