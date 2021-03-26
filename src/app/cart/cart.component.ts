import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Travels } from '../travels';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  items: Array<Travels> = [];
  itemsTotal: number = 0;
  discount: string = "";
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.itemsTotal = this.cartService.getTotal();

    if(this.itemsTotal > 200 && this.itemsTotal < 500){
      this.itemsTotal *= 0.9;
      this.discount = "10% Discount";
    }else if(this.itemsTotal > 500){
      this.itemsTotal *= 0.8;
      this.discount = "20% Discount";
    }
  }

}
