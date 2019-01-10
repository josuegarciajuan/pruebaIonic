import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ItemsModel } from "../../models/items/items";
import {Api} from '../../providers/api/api';
import { FilmsPage } from "../../pages/films/films";
import { StarshipsPage } from "../../pages/starships/starships";
import { VehiclesPage } from "../../pages/vehicles/vehicles";



@Component({
  selector: 'item',
  templateUrl: 'item.html'
})
export class ItemComponent {

  @Input('url') url : any;
  @Input('type') type : any;
  @Input('havelink') havelink : any;
  @Input('endpoint') endpoint : any;

  public item: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams,private api: Api) {

  }


  ngOnInit(){
  		this.item = new ItemsModel(this.url,this.type,this.havelink,this.endpoint);  
  		this.item.ident=this.getIdFromUrl(this.url);
  		let endpoint=this.endpoint+"/"+this.item.ident;
  		this.api.post(endpoint).subscribe((resp) => {
	       let aux = resp.json();
	       switch(this.type){
	       	 case "pilots":
	       	 	this.item.text=aux.name;
	       	 	break;
	       	 case "films":
	       	 	this.item.text=aux.title;
	       	 	break;	
	       }
	    });
  }
  getIdFromUrl(url){
  	let splited=url.split('/');
  	return splited[splited.length-2];
  }

  openPage(page,ident){
  	let paramObj = { ident: ident };
	switch(this.type){
		 case "films":
		 	this.navCtrl.push(FilmsPage,paramObj);
		 	break;	
	}
    
  }

}
