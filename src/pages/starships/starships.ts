import { Component } from '@angular/core';
import {Api} from '../../providers/api/api';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StarshipsModel } from "../../models/starships/starships";
import { GlobalProvider } from '../../providers/globalProvider/globalProvider';

@Component({
  selector: 'starships-home',
  templateUrl: 'starships.html'
})
export class StarshipsPage {

  public pag: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api, private globalP: GlobalProvider) {
  	this.pag=1;
	this.globalP.quedanPages=true;  	 
  	 
  } 

  ionViewWillEnter() {  
  	this.globalP.starships=[];
	if(this.navParams.get("ident")){ 
		this.globalP.getInfo("starships",this.navParams.get("ident"),"starships",1);
	}else{
		this.globalP.getInfo("starships",0,"starships",1);
	}
  }
  doInfinite(): Promise<any> {
 	    return new Promise((resolve) => {
	      setTimeout(() => {
	      	this.pag++;
	      	
			if(!this.navParams.get("ident") && this.globalP.quedanPages){ 
				this.globalP.getInfo("starships",0,"starships",this.pag,2);
			}
	        resolve();
	      }, 500);
	    })
  }
 
}
