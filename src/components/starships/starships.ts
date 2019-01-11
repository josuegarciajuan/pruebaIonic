import { Component, Input } from '@angular/core';
import { StarshipsModel } from "../../models/starships/starships";
import { ItemsModel } from "../../models/items/items";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/globalProvider/globalProvider';
import { StarshipsPage } from "../../pages/starships/starships";

@Component({
  selector: 'starships',
  templateUrl: 'starships.html'
})
export class StarshipsComponent {
  
  @Input('item') item : any;
  public pilots: Array <any> = [];
  public films: Array <any> = [];
  public starship: StarshipsModel;
  @Input('version') version : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private globalP: GlobalProvider) {
	
 
  }
  ngOnInit(){
  		this.starship=this.item; 		 	
 		this.globalP.chargeInfo(this.item.pilots,this.pilots,"pilots",false,"people");
 		this.globalP.chargeInfo(this.item.films,this.films,"films",true,"films");
  }
  


	viewMore(url){

		let ident=this.globalP.getIdFromUrl(url);
	  	let paramObj = { ident: ident };
		this.navCtrl.push(StarshipsPage,paramObj);    
  }

}
