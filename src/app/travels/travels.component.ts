import { Component, OnInit } from '@angular/core';
import { GreeceService } from '../greece.service';
import { Travels } from '../travels';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.sass']
})
export class TravelsComponent implements OnInit {
  greeceTravels: Array<Travels> = [];
  spainTravels: Array<Travels> = [];

  contact = new FormGroup({
    fullName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    massage: new FormControl("", Validators.required)
  })

  constructor(private greeceService: GreeceService) { }

  ngOnInit(): void {
    this.greeceTravels = this.greeceService.getGreeceTrevals();
    this.spainTravels = this.greeceService.getSpainTrevals();

    var backBtnGr = document.getElementById('backGr');
    var backBtnSp = document.getElementById('backSp');
    var travels = document.getElementById('travelsCont');
    var btnGr = document.getElementById('divGr');
    var btnSp = document.getElementById('divSp');
    backBtnGr.addEventListener('click', ()=>{
      document.getElementById('greeceCont').style.display = 'none';
      travels.style.display = 'grid';
    })
    backBtnSp.addEventListener('click', ()=>{
      document.getElementById('spainCont').style.display = 'none';
      travels.style.display = 'grid';
    })
    btnGr.addEventListener('click', ()=>{
      travels.style.display = 'none';
      document.getElementById('greeceCont').style.display = 'block';
    })
    btnSp.addEventListener('click', ()=>{
      travels.style.display = 'none';
      document.getElementById('spainCont').style.display = 'block';
    })
  }

  onSubmit(){
    if (this.contact.valid) {
      alert(`Your message has been sent`)
      this.contact.reset();
    }
  }
  
}
