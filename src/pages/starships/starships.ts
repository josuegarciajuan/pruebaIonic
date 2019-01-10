import { Component } from '@angular/core';
import {Api} from '../../providers/api/api';
import { NavController } from 'ionic-angular';
import { StarshipsModel } from "../../models/starships/starships";

@Component({
  selector: 'starships-home',
  templateUrl: 'starships.html'
})
export class StarshipsPage {

  public starships: Array <any> = [];

  constructor(public navCtrl: NavController, private api: Api) {
  
  	 
  } 

  ionViewWillEnter() {  
    this.getInfo();
  }

  getInfo(){
    this.api.post("starships").subscribe((resp) => {
       this.starships = resp.json();
    });

  }

}



