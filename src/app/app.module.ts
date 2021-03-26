import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Details2Component } from './details2/details2.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HomeComponent,
    BlogComponent,
    TravelsComponent,
    CartComponent,
    FooterComponent,
    DetailsComponent,
    CheckoutComponent,
    Details2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
