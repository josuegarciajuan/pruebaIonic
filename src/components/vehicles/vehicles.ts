import { Component } from '@angular/core';

/**
 * Generated class for the VehiclesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'vehicles',
  templateUrl: 'vehicles.html'
})
export class VehiclesComponent {

  text: string;

  constructor() {
    console.log('Hello VehiclesComponent Component');
    this.text = 'Hello World';
  }

}
