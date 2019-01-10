import { Component } from '@angular/core';
import {Api} from '../../providers/api/api';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VehiclesModel } from "../../models/vehicles/vehicles";
import { GlobalProvider } from '../../providers/globalProvider/globalProvider';

@Component({
  selector: 'vehicles-home',
  templateUrl: 'vehicles.html'
})
export class VehiclesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api, private globalP: GlobalProvider) {  
  	 
  } 

  ionViewWillEnter() {  
	if(this.navParams.get("ident")){ 
		this.globalP.items=this.globalP.getInfo(this.navParams.get("ident"),"vehicles");
	}else{
		this.globalP.items=this.globalP.getInfo(0,"vehicles");
	}

  }

}



