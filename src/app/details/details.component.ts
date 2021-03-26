import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Travels } from '../travels';
import { GreeceService } from '../greece.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  curTravel: Travels
  constructor(private route: ActivatedRoute, private greeceService: GreeceService, private cartService: CartService) {
    this.curTravel = this.getCurTravel();
  }

  addToCart() {
    this.cartService.addToCart(this.curTravel);
  }

  ngOnInit(): void {
    this.curTravel = this.getCurTravel();
  }

  getCurTravel() : Travels {
    let index : number = 0;
    this.route.paramMap.subscribe(param => {
      index = parseInt(param.get('Id')||"")
    })
    return this.greeceService.getGreeceTrevals()[index];
  }

}
