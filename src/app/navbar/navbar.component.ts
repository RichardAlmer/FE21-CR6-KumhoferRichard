import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  itemCount: number;
  constructor(private cartService: CartService) { 
    this.itemCount = this.updateCount();
  }

  ngDoCheck(): void {
    this.itemCount = this.updateCount();
  }
  
  updateCount() : number {
    return this.cartService.getItemCount();
  }

  ngOnInit(): void {
  }

}
