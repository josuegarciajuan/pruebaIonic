import { Component, Input } from '@angular/core';


@Component({
  selector: 'characters',
  templateUrl: 'characters.html'
})
export class CharactersComponent {

	@Input('item') item : any;

  

  constructor() {
  
  }

}
