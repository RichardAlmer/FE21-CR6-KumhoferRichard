import { Injectable } from '@angular/core';
import { Travels } from './travels';
import { greece } from './greece';

@Injectable({
  providedIn: 'root'
})
export class GreeceService {
  greeceTravels: Array<Travels> = [];

  constructor() { 
    this.greeceTravels = greece;
  }

  getGreeceTrevals(): Array<Travels> {
    return this.greeceTravels;
  }
}
