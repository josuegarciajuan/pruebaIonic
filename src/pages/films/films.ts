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

  public pag: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api, private globalP: GlobalProvider) {
  	this.pag=1;
	this.globalP.quedanPages=true;  	 

  }

  ionViewWillEnter() {  
  	this.globalP.films=[];
	if(this.navParams.get("ident")){ 
		this.globalP.getInfo("films",this.navParams.get("ident"),"films",1);
	}else{
		this.globalP.getInfo("films",0,"films",1);
	}

  }
  doInfinite(): Promise<any> {
 	    return new Promise((resolve) => {
	      setTimeout(() => {
	      	this.pag++;
	      	
			if(!this.navParams.get("ident") && this.globalP.quedanPages){ 
				this.globalP.getInfo("films",0,"films",this.pag,2);
			}
	        resolve();
	      }, 500);
	    })
  }
  
}


