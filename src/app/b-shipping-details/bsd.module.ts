import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//partner component
// import { PartnerComponent } from "../partner/partner.component";

const routes: Routes = [

    //partner
    // { path: ' ../partner ', component: PartnerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
