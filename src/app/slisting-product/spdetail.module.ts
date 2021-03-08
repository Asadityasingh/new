import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//slisting-product component
 import { SProductDetailComponent } from "../s-product-detail/s-product-detail.component";

const routes: Routes = [

    //slisting-product
    { path: ' ../s-product-detail ', component: SProductDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }