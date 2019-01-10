import { Component, Input } from '@angular/core';
import { StarshipsModel } from "../../models/starships/starships";
import { ItemsModel } from "../../models/items/items";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
 
  }
   ngOnInit(){
	  this.chargePlanets();
	  this.chargeStarships();
	  this.chargeVehicles();
	  this.chargeSpecies();
  }
  

  chargePlanets(){
  	for(let i=0;i<=this.item.planets.length;i++){
  		if(this.item.planets[i]!= undefined){
  			let planet = new ItemsModel(this.item.planets[i],"planets",false,"planets");  
  			this.planets.push(planet);
  		}
  	}
  }
  chargeStarships(){
  	for(let i=0;i<=this.item.starships.length;i++){
  		if(this.item.starships[i]!= undefined){
  			let starship = new ItemsModel(this.item.starships[i],"starships",true,"starships");  
  			this.starships.push(starship);
  		}
  	}
  }
  chargeVehicles(){
  	for(let i=0;i<=this.item.vehicles.length;i++){
  		if(this.item.vehicles[i]!= undefined){
  			let vehicle = new ItemsModel(this.item.vehicles[i],"vehicles",true,"vehicles");  
  			this.vehicles.push(vehicle);
  		}
  	}
  }
  chargeSpecies(){
  	for(let i=0;i<=this.item.species.length;i++){
  		if(this.item.species[i]!= undefined){
  			let specie = new ItemsModel(this.item.species[i],"species",false,"species");  
  			this.species.push(specie);
  		}
  	}
  }



}
