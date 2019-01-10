import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilmsModel } from "../../models/films/films";
import { ItemsModel } from "../../models/items/items";

@Component({
  selector: 'films-home',
  templateUrl: 'films.html'
})
export class FilmsPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {  
  	console.log("holaa");
    let item = new ItemsModel("planet","federico");  
    console.log("holaa");
    console.log(item);
  }
}