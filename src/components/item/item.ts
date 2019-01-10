import { Component, Input } from '@angular/core';
import { ItemsModel } from "../../models/items/items";
import {Api} from '../../providers/api/api';

@Component({
  selector: 'item',
  templateUrl: 'item.html'
})
export class ItemComponent {

  @Input('url') url : any;
  @Input('type') type : any;
  @Input('havelink') havelink : any;
  @Input('endpoint') endpoint : any;

  public item: any; 

  constructor(private api: Api) {

  }


  ngOnInit(){
  		this.item = new ItemsModel(this.url,this.type,this.havelink,this.endpoint);  
  		let ident=this.getIdFromUrl(this.url);
  		let endpoint=this.endpoint+"/"+ident;
  		this.api.post(endpoint).subscribe((resp) => {
	       let aux = resp.json();
	       switch(this.type){
	       	 case "pilots":
	       	 	this.item.text=aux.name;
	       	 	break;
	       }
	    });
  }
  getIdFromUrl(url){
  	let splited=url.split('/');
  	return splited[splited.length-2];
  }

}
