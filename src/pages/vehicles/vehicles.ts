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
		this.getInfo(this.navParams.get("ident"));
	}else{
		this.getInfo(0);
	}

  }

  getInfo(ident){
	let endPoint="vehicles";
	if(ident!=0){
		endPoint+="/"+ident;
	}
    this.api.post(endPoint).subscribe((resp) => {
       if(ident!=0){
       		this.vehicles.push(resp.json());

       }else{
			let aux = resp.json();
			this.vehicles=aux.results;
       }	
       
    });

  }





}



