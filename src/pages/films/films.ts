import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmsModel } from "../../models/films/films";
import {Api} from '../../providers/api/api';
import { GlobalProvider } from '../../providers/globalProvider/globalProvider';

@Component({
  selector: 'films-home',
  templateUrl: 'films.html'
})
export class FilmsPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api, private globalP: GlobalProvider) {

  }

  ionViewWillEnter() {  
	if(this.navParams.get("ident")){ 
		this.globalP.getInfo(this.navParams.get("ident"),"films");
	}else{
		this.globalP.getInfo(0,"films");
	}

  }
  
}


