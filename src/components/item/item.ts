import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { ItemsModel } from "../../models/items/items";
import { CharactersModel } from "../../models/characters/characters";
import {Api} from '../../providers/api/api';
import { FilmsPage } from "../../pages/films/films";
import { StarshipsPage } from "../../pages/starships/starships";
import { VehiclesPage } from "../../pages/vehicles/vehicles";
import { ModalCharacterPage } from "./modalCharacter/modalCharacter";


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
  public character: CharactersModel;

  constructor(public navCtrl: NavController, public navParams: NavParams,private api: Api, public modalCtrl: ModalController) {

  }


  ngOnInit(){
  		this.item = new ItemsModel(this.url,this.type,this.havelink,this.endpoint);  
  		this.item.ident=this.getIdFromUrl(this.url);
  		let endpoint=this.endpoint+"/"+this.item.ident;
  		this.api.post(endpoint).subscribe((resp) => {
	       let aux = resp.json();
	       this.character=aux;
	       switch(this.type){
	       	 case "pilots":
	       	 	this.item.text=aux.name;
	       	 	break;
	       	 case "films":
	       	 	this.item.text=aux.title;
	       	 	break;
	       	case "characters":
	       	 	this.item.text=aux.name;
	       	 	break;
	       	case "planets":
	       	 	this.item.text=aux.name;
	       	 	break;
	       	case "starships":
	       	 	this.item.text=aux.name;
	       	 	break;
	       	case "vehicles":
	       	 	this.item.text=aux.name;
	       	 	break;
	       	case "species":
	       	 	this.item.text=aux.name;
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
		 case "starships":
		 	this.navCtrl.push(StarshipsPage,paramObj);
		 	break;	
		 case "vehicles":
		 	this.navCtrl.push(VehiclesPage,paramObj);
		 	break;			
	}
    
  }

  abrirmodal(): any{
  	let modal=this.modalCtrl.create(ModalCharacterPage,{data: this.character});
  	modal.present();
  }

}
