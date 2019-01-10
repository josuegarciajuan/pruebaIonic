import { Component, Input } from '@angular/core';
import { VehiclesModel } from "../../models/vehicles/vehicles";
import { ItemsModel } from "../../models/items/items";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/globalProvider/globalProvider';

@Component({
  selector: 'vehicles',
  templateUrl: 'vehicles.html'
})
export class VehiclesComponent {
  
  @Input('item') item : any;
  public pilots: Array <any> = [];
  public films: Array <any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private globalP: GlobalProvider) {
  	
 
  }
  ngOnInit(){

 		this.globalP.chargeInfo(this.item.pilots,this.pilots,"pilots",false,"people");
 		this.globalP.chargeInfo(this.item.films,this.films,"films",false,"films");

  }
  



}
