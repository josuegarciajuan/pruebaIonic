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

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api, private globalP: GlobalProvider) {  
	this.pag=1;
	this.globalP.quedanPages=true;  	 
  } 

  ionViewWillEnter() {  
  	this.globalP.items=[];
	if(this.navParams.get("ident")){ 
		this.globalP.getInfo(this.navParams.get("ident"),"vehicles",1);
	}else{
		this.globalP.getInfo(0,"vehicles",1);
	}

  }
  doInfinite(): Promise<any> {
 	    return new Promise((resolve) => {
	      setTimeout(() => {
	      	this.pag++;
	      	
			if(!this.navParams.get("ident") && this.globalP.quedanPages){ 
				this.globalP.getInfo(0,"vehicles",this.pag,2);
			}
	        resolve();
	      }, 500);
	    })
  }

}



