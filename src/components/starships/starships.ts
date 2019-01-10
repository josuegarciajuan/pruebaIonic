import { Component, Input } from '@angular/core';
import { StarshipsModel } from "../../models/starships/starships";


@Component({
  selector: 'starships',
  templateUrl: 'starships.html'
})
export class StarshipsComponent {
  
  @Input('item') item : any;

  constructor() {
     
  }

}