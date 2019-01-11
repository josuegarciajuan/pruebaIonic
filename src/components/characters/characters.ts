import { Component, Input } from '@angular/core';
import { GlobalProvider } from '../../providers/globalProvider/globalProvider';

@Component({
  selector: 'characters',
  templateUrl: 'characters.html'
})
export class CharactersComponent {

  @Input('item') item : any;
  public films: Array <any> = [];
  public species: Array <any> = [];
  public vehicles: Array <any> = [];
  public starships: Array <any> = [];


  constructor(private globalP: GlobalProvider) {
  
  }

  ngOnInit(){
  

 		this.globalP.chargeInfo(this.item.films,this.films,"films",true,"films");
 		this.globalP.chargeInfo(this.item.species,this.species,"species",false,"species");
 		this.globalP.chargeInfo(this.item.vehicles,this.vehicles,"vehicles",true,"vehicles");
 		this.globalP.chargeInfo(this.item.starships,this.starships,"starships",true,"starships");

  }

}
