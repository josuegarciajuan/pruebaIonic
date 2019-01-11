import { Component, Input } from '@angular/core';
import { FilmsModel } from "../../models/films/films";
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

  public film: FilmsModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private globalP: GlobalProvider) {
  	

  }
   ngOnInit(){
   	  this.film=this.item; 		 	
	  this.globalP.chargeInfo(this.item.planets,this.planets,"planets",false,"planets");
	  this.globalP.chargeInfo(this.item.starships,this.starships,"starships",true,"starships");
	  this.globalP.chargeInfo(this.item.vehicles,this.vehicles,"vehicles",true,"vehicles");
	  this.globalP.chargeInfo(this.item.species,this.species,"species",false,"species");
	  this.globalP.chargeInfo(this.item.characters,this.characters,"characters",false,"people");

  }
  
  
}
