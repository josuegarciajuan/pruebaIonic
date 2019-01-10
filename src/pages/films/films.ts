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
		console.log("solo 1 peli:"+this.navParams.get("ident"));
	}else{
		this.getInfo();
	}

  }
	getInfo(){
    this.api.post("films").subscribe((resp) => {
       this.films = resp.json();
    });

  }

}


