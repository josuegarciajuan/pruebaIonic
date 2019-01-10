import { Component, Input } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: 'item.html'
})
export class ItemComponent {

  @Input('show') show : any;
  @Input('url') url : any;

  constructor() {

  }

}