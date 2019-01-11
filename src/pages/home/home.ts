import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppEnv} from '../../app/app.env';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public image1;
  constructor(public navCtrl: NavController,public appEnv: AppEnv) {
  	this.image1=appEnv.URL_ASSETS+"logo.png"; 
  }

}
