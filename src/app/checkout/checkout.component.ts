import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
  contact = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName:new FormControl("", Validators.required),
    street: new FormControl("", Validators.required),
    streetNo: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    zip: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email])
  })

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.contact.valid) {
      alert(`Thank you for booking at TravelGavel.\nTo pay ${this.cartService.getTotal().toFixed(2)} EUR.\nWe will send you the invoice by email.`)
      this.cartService.clearCart();
      this.contact.reset();
    }
  }

}
