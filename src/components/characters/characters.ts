import { Component } from '@angular/core';

/**
 * Generated class for the CharactersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'characters',
  templateUrl: 'characters.html'
})
export class CharactersComponent {

  text: string;

  constructor() {
    console.log('Hello CharactersComponent Component');
    this.text = 'Hello World';
  }

}
