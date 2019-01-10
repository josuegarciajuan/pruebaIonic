import { Component } from '@angular/core';
import {Api} from '../../providers/api/api';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StarshipsModel } from "../../models/starships/starships";

@Component({
  selector: 'starships-home',
  templateUrl: 'starships.html'
})
export class StarshipsPage {

  public starships: Array <any> = [];

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
	let endPoint="starships";
	if(ident!=0){
		endPoint+="/"+ident;
	}
    this.api.post(endPoint).subscribe((resp) => {
       if(ident!=0){
       		this.starships.push(resp.json());

       }else{
			let aux = resp.json();
			this.starships=aux.results;
       }	
       
    });

  }





}



