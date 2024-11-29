import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
   const _ToastrService=inject(ToastrService)
   const _Router=inject(Router)
  if(localStorage.getItem('userToken'))
    return true

else
{
  _ToastrService.error('يجب تسجيل الدخول اولا')
  _Router.navigate(['/تسجيل الدخول']);
  return false;

}
};
