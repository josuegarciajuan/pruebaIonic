import { Component, Input } from '@angular/core';
import { VehiclesModel } from "../../models/starships/starships";
import { ItemsModel } from "../../models/items/items";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'vehicles',
  templateUrl: 'vehicles.html'
})
export class VehiclesComponent {
  
  @Input('item') item : any;
  public pilots: Array <any> = [];
  public films: Array <any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
 
  }
   ngOnInit(){
 		this.chargePilots();
 		this.chargeFilms();
  }
  

  chargePilots(){
  	for(let i=0;i<=this.item.pilots.length;i++){
  		if(this.item.pilots[i]!= undefined){
  			let pilot = new ItemsModel(this.item.pilots[i],"pilots",false,"people");  
  			this.pilots.push(pilot);
  		}
  	}
  }
  chargeFilms(){
  	for(let i=0;i<=this.item.films.length;i++){
  		if(this.item.films[i]!= undefined){
  			let film = new ItemsModel(this.item.films[i],"films",true,"films");  
  			this.films.push(film);
  		}
  	}
  }

}
