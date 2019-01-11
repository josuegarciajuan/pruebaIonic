import { Component, Input } from '@angular/core';

@Component({
  selector: 'champ-value',
  templateUrl: 'champ-value.html'
})
export class ChampValueComponent {

  @Input('champ') champ : any;
  @Input('value') value : any;

  constructor() {

  }

}
