import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
