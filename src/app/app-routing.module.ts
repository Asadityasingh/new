import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//seller component
import { SlistingProductComponent } from "./slisting-product/slisting-product.component";
import { SProductDetailComponent } from "./s-product-detail/s-product-detail.component";

//buyer component
import { BLOfCropComponent } from "./b-l-of-crop/b-l-of-crop.component";
import { BShippingDetailsComponent } from "./b-shipping-details/b-shipping-details.component";

//partner component
import { PartnerComponent } from "./partner/partner.component";
//login component
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //seller path
  { path:'slisting-product',component:SlistingProductComponent },
  { path: 's-product-detail', component: SProductDetailComponent },
  //buyer path
  { path:'b-l-of-crop',component:BLOfCropComponent},
  { path:'b-shipping-details',component:BShippingDetailsComponent},
  //partner
  { path:'partner',component:PartnerComponent},
  //login component
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//array of components
export const routingComponents = [SlistingProductComponent,LoginComponent, SProductDetailComponent, BLOfCropComponent, BShippingDetailsComponent, PartnerComponent]
