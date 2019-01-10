import { Component } from '@angular/core';

/**
 * Generated class for the FilmsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'films',
  templateUrl: 'films.html'
})
export class FilmsComponent {

  text: string;

  constructor() {
    console.log('Hello FilmsComponent Component');
    this.text = 'Hello World';
  }

}
