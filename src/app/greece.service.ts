import { Injectable } from '@angular/core';
import { Travels } from './travels';
import { greece, spain } from './greece';

@Injectable({
  providedIn: 'root'
})
export class GreeceService {
  greeceTravels: Array<Travels> = [];
  spainTravels: Array<Travels> = [];

  constructor() { 
    this.greeceTravels = greece;
    this.spainTravels = spain;
  }

  getGreeceTrevals(): Array<Travels> {
    return this.greeceTravels;
  }

  getSpainTrevals(): Array<Travels> {
    return this.spainTravels;
  }
}
