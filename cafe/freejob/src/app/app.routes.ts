import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MarktingComponent } from './component/markting/markting.component';
import { WhoWeAreComponent } from './component/who-we-are/who-we-are.component';
import { CommunicationUsComponent } from './component/communication-us/communication-us.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { CartComponent } from './component/cart/cart.component';
import { MainlayoutComponent } from './main-layout/mainlayout/mainlayout.component';
import { AuthlayoutComponent } from './auth-layout/authlayout/authlayout.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { ProductInfoComponent } from './component/product-info/product-info.component';
import { TrackingComponent } from './component/tracking/tracking.component';
import { TrackingInfoComponent } from './component/tracking-info/tracking-info.component';
import { UserSettingComponent } from './component/reuseable-components/user-setting/user-setting.component';
import { AcountOverviewComponent } from './component/acount-overview/acount-overview.component';

export const routes: Routes = [
   {path:"",component:MainlayoutComponent,children:[
    {path:"",redirectTo:"/الصفحة الرئسية",pathMatch:'full',title:"الصفحة الرئسية"},
    {path:"الصفحة الرئسية",component:HomeComponent,title:"الصفحة الرئسية", },
    {path:"التسوق/:Id",component:MarktingComponent,title:"التسوق"},
    {path:"التسوق",component:MarktingComponent,title:"التسوق"},
    {path:"من نحن",component:WhoWeAreComponent,title:"من نحن"},
    {path:"تواصل معنا",component:CommunicationUsComponent,title:"تواصل معنا"},
    {path:"المفضلة",component:WishlistComponent,title:"المفضلة"},
    {path:"تفاصيل/:id",component:ProductInfoComponent,title:"تفاصيل منتج"},
    
]},
{path:"",component:AuthlayoutComponent,children:[ //here must update redirectto
    {path:"عربة الشراء",component:CartComponent,title:"عربة الشراء"},
    {path:"الدفع",component:PaymentComponent,title:"الدفع "},
    {path:"انشاء حساب",component:RegisterComponent ,title:"انشاء حساب"},
    {path:"تسجيل الدخول",component:LoginComponent,title:"تسجيل الدخول"},
    {path:"forgetpassword",component:ForgetpasswordComponent,title:"forgetpassword"},
    {path:"تعقب",component:TrackingComponent,title:"تعقب"},
    {path:"حاله التعقب",component:TrackingInfoComponent,title:"تعقب"},
    {path:"الاعدادات",component:UserSettingComponent,title:"الاعدادات"},
    {path:"عام",component:AcountOverviewComponent,title:"الاعدادات"},
    //must make not found component;
]},
]
