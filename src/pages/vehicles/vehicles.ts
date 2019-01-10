import { Component } from '@angular/core';
import {Api} from '../../providers/api/api';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VehiclesModel } from "../../models/vehicles/vehicles";


@Component({
  selector: 'vehicles-home',
  templateUrl: 'vehicles.html'
})
export class VehiclesPage {

  public vehicles: Array <any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api) {
  
  	 
  } 

  ionViewWillEnter() {  
	if(this.navParams.get("ident")){ 
		//this.globalP.getInfo(this.navParams.get("ident"),"vehicles");
	}else{
		//this.globalP.getInfo(0,"vehicles");
	}

  }




}



