import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StarshipsModel } from "../../models/starships/starships";


@Component({
  selector: 'starships-home',
  templateUrl: 'starships.html'
})
export class StarshipsPage {

  public starship: any; 

  constructor(public navCtrl: NavController) {
  	
  }

  ionViewWillEnter() {  
    this.starship=new StarshipsModel();
    this.starship.name="test2";
    console.log(this.starship);

  }

}
