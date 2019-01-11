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

  public pag: number;
  public version: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api, private globalP: GlobalProvider) {  
	this.pag=1;
	this.globalP.quedanPages=true;  	 
  } 

  ionViewWillEnter() {  
  	this.globalP.vehicles=[];
	if(this.navParams.get("ident")){ 
		this.globalP.getInfo("vehicles",this.navParams.get("ident"),"vehicles",1);
		this.version="long"
	}else{
		this.globalP.getInfo("vehicles",0,"vehicles",1);
		this.version="short"
	}
	console.log(this.globalP.vehicles);

  }
  doInfinite(): Promise<any> {
 	    return new Promise((resolve) => {
	      setTimeout(() => {
	      	this.pag++;
	      	
			if(!this.navParams.get("ident") && this.globalP.quedanPages){ 
				this.globalP.getInfo("vehicles",0,"vehicles",this.pag,2);
			}
	        resolve();
	      }, 500);
	    })
  }

}



