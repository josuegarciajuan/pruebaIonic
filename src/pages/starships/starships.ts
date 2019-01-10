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

  public starships: Array <any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api, private globalP: GlobalProvider) {
  
  	 
  } 

  ionViewWillEnter() {  
	if(this.navParams.get("ident")){ 
		this.globalP.items=this.globalP.getInfo(this.navParams.get("ident"),"starships");
	}else{
		this.globalP.items=this.globalP.getInfo(0,"starships");
	}
  }
 
}
