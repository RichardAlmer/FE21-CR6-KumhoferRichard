import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Details2Component } from './details2/details2.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },{
    path: "blog", component: BlogComponent
  },{
    path: "travels", component: TravelsComponent
  },{
    path: "cart", component: CartComponent
  },{
    path: "travels/details/:Id", component: DetailsComponent
  },{
    path: "travels/details2/:Id", component: Details2Component
  },{
    path: "checkout", component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
