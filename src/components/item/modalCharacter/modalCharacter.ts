import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharactersModel } from "../../../models/characters/characters";

@Component({
  selector: 'modalCharacter-home',
  templateUrl: 'modalCharacter.html'
})
export class ModalCharacterPage {

  public texto: string;
  public character: CharactersModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.character=this.navParams.get("data");

  }

  ionViewWillEnter() {  

  }

}
