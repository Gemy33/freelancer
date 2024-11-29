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
import { SettingComponent } from './component/setting/setting.component';
import { UserPasswordComponent } from './component/user-password/user-password.component';
import { PersonalPageComponent } from './component/personal-page/personal-page.component';
import { OrderingComponent } from './component/ordering/ordering.component';
import { AddressComponent } from './component/address/address.component';
import { PayingInfoComponent } from './component/paying-info/paying-info.component';
import { DataForPayingComponent } from './component/data-for-paying/data-for-paying.component';
import { SearchBynameComponent } from './component/search-byname/search-byname.component';
import { authGuard } from './gurds/auth.guard';

export const routes: Routes = [
   {path:"",component:MainlayoutComponent,children:[
    {path:"",redirectTo:"/الصفحة الرئسية",pathMatch:'full',title:"الصفحة الرئسية"},
    {path:"الصفحة الرئسية",component:HomeComponent,title:"الصفحة الرئسية", },
    {path:"التسوق/:Id",component:MarktingComponent,title:"التسوق"},
    {path:"التسوق",component:MarktingComponent,title:"التسوق"},
    {path:"من نحن",component:WhoWeAreComponent,title:"من نحن"},
    {path:"تواصل معنا",component:CommunicationUsComponent,title:"تواصل معنا"},
    {path:"تفاصيل/:id",component:ProductInfoComponent,title:"تفاصيل منتج"},
    {path:"انشاء حساب",component:RegisterComponent ,title:"انشاء حساب"},
    {path:"تسجيل الدخول",component:LoginComponent,title:"تسجيل الدخول"},
    {path:"forgetpassword",component:ForgetpasswordComponent,title:"forgetpassword"},
    {path:"البحث",component:SearchBynameComponent,title:"البحث"},


    
]},
{path:"",component:AuthlayoutComponent,canActivate:[authGuard],children:[ //here must update redirectto
    {path:"المفضلة",component:WishlistComponent,title:"المفضلة"},
    {path:"عربة الشراء",component:CartComponent,title:"عربة الشراء"},
    {path:"الدفع",component:PaymentComponent,title:"الدفع "},
    {path:"تعقب",component:TrackingComponent,title:"تعقب"},
    {path:"حاله التعقب",component:TrackingInfoComponent,title:"تعقب"},
    {path:"الاعدادات",component:UserSettingComponent,title:"الاعدادات"},
    {path:"اضافه عنوان/:ID",component:DataForPayingComponent,title:"الاعدادات"},
   
    //must make not found component;
]},
{
    path:"",component:SettingComponent,canActivate:[authGuard],children:[
        {path:"عام",component:AcountOverviewComponent,title:"الاعدادات"},       
        {path:"كلمه السر",component:UserPasswordComponent,title:"password"},       
        {path:"الصفحه الشخصيه",component:PersonalPageComponent,title:"الاعدادات"},       
        {path:"الطلبات",component:OrderingComponent,title:"الاعدادات"},       
        {path:"العنوان",component:AddressComponent,title:"الاعدادات"},       
        {path:"تفاصيل الدفع",component:PayingInfoComponent,title:"الاعدادات"},       
        {path:"المدينة",component:PayingInfoComponent,title:"الدفع"},       
]
}
]
