import { Component, OnInit } from '@angular/core';
import { GreeceService } from '../greece.service';
import { Travels } from '../travels';

@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.sass']
})
export class TravelsComponent implements OnInit {
  greeceTravels: Array<Travels> = [];

  constructor(private greeceService: GreeceService) { }

  ngOnInit(): void {
    this.greeceTravels = this.greeceService.getGreeceTrevals();

    var backBtn = document.getElementById('back');
    var travels = document.getElementById('travelsCont');
    var btnGr = document.getElementById('divGr');
    backBtn.addEventListener('click', ()=>{
      document.getElementById('greeceCont').style.display = 'none';
      travels.style.display = 'grid';
    })
    btnGr.addEventListener('click', ()=>{
      travels.style.display = 'none';
      document.getElementById('greeceCont').style.display = 'block';
    })
  }
  
}
