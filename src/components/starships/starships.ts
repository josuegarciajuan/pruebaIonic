import { Component, Input } from '@angular/core';
import { StarshipsModel } from "../../models/starships/starships";
import { ItemsModel } from "../../models/items/items";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'starships',
  templateUrl: 'starships.html'
})
export class StarshipsComponent {
  
  @Input('item') item : any;
  public pilots: Array <any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
 
  }
   ngOnInit(){
 		this.carga_pilotos();
  }
  

  carga_pilotos(){
  	for(let i=0;i<=this.item.pilots.length;i++){
  		if(this.item.pilots[i]!= undefined){
  			let pilot = new ItemsModel(this.item.pilots[i],"pilots",false,"people");  
  			this.pilots.push(pilot);
  		}
  	}
  
  }

}
