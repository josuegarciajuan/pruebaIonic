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

  }
}