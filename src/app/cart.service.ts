import { Injectable } from '@angular/core';
import { Travels } from './travels';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<Travels> = [];
  constructor() { }

  addToCart(travel: Travels) : void {
    this.items.push(travel);
  }

  getItems() : Array<Travels> {
    return this.items;
  }

  clearCart() : void {
    this.items = [];
  }
  
  getItemCount() : number {
    return this.items.length;
  }

  getTotal() : number {
    return this.items.reduce((acc, ele) => acc + ele.price, 0);
  }
}
