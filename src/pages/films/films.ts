import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilmsModel } from "../../models/films/films";

@Component({
  selector: 'films-home',
  templateUrl: 'films.html'
})
export class FilmsPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {  
  	console.log("holaa");
    let film = new FilmsModel();  
    film.name="Esto es 1 test";
    console.log("holaa");
    console.log(film);
  }
}