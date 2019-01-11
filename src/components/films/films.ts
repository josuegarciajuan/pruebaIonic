import { Component, Input } from '@angular/core';
import { StarshipsModel } from "../../models/starships/starships";
import { ItemsModel } from "../../models/items/items";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/globalProvider/globalProvider';

@Component({
  selector: 'films',
  templateUrl: 'films.html'
})
export class FilmsComponent {
  
  @Input('item') item : any;
  
  public characters: Array <any> = [];
  public planets: Array <any> = [];
  public starships: Array <any> = [];
  public vehicles: Array <any> = [];
  public species: Array <any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private globalP: GlobalProvider) {
  	
 console.log("paso1");
  }
   ngOnInit(){
	console.log("paso2");
	  this.globalP.chargeInfo(this.item.planets,this.planets,"planets",false,"planets");
	  this.globalP.chargeInfo(this.item.starships,this.starships,"starships",true,"starships");
	  this.globalP.chargeInfo(this.item.vehicles,this.vehicles,"vehicles",true,"vehicles");
	  this.globalP.chargeInfo(this.item.species,this.species,"species",false,"species");
	  this.globalP.chargeInfo(this.item.characters,this.characters,"characters",false,"people");

  }
  
  
}
