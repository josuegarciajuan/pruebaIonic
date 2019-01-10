import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmsModel } from "../../models/films/films";
import {Api} from '../../providers/api/api';

@Component({
  selector: 'films-home',
  templateUrl: 'films.html'
})
export class FilmsPage {

  public films: Array <any> = [];	

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
	let endPoint="films";
	if(ident!=0){
		endPoint+="/"+ident;
	}
    this.api.post(endPoint).subscribe((resp) => {
       if(ident!=0){
       		this.films.push(resp.json());

       }else{
			let aux = resp.json();
			this.films=aux.results;
       }	
       
    });

  }

}


