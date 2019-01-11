import { Component, Input } from '@angular/core';
import { VehiclesModel } from "../../models/vehicles/vehicles";
import { ItemsModel } from "../../models/items/items";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/globalProvider/globalProvider';
import { VehiclesPage } from "../../pages/vehicles/vehicles";

@Component({
  selector: 'vehicles',
  templateUrl: 'vehicles.html'
})
export class VehiclesComponent {
  
  @Input('item') item : any;
  public pilots: Array <any> = [];
  public films: Array <any> = [];
  public vehicle: VehiclesModel;
  @Input('version') version : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private globalP: GlobalProvider) {
  	
 
  }
  ngOnInit(){
	this.vehicle=this.item;
	this.globalP.chargeInfo(this.item.pilots,this.pilots,"pilots",false,"people");
	this.globalP.chargeInfo(this.item.films,this.films,"films",true,"films");

  }
  
  viewMore(url){

  	let ident=this.globalP.getIdFromUrl(url);
	let paramObj = { ident: ident };
	this.navCtrl.push(VehiclesPage,paramObj);    
  }



}
