import { Component, Input } from '@angular/core';
import { StarshipsModel } from "../../models/starships/starships";
import { ItemsModel } from "../../models/items/items";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/globalProvider/globalProvider';

@Component({
  selector: 'starships',
  templateUrl: 'starships.html'
})
export class StarshipsComponent {
  
  @Input('item') item : any;
  public pilots: Array <any> = [];
  public films: Array <any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private globalP: GlobalProvider) {
  	
 
  }
   ngOnInit(){
 		console.log(this.item);
 		this.globalP.chargeInfo(this.item.pilots,this.pilots,"pilots",false,"people");
 		this.globalP.chargeInfo(this.item.films,this.films,"films",true,"films");

  }
  

}
