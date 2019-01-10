import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, RequestOptions, URLSearchParams, Headers} from '@angular/http';
import { ItemsModel } from "../../models/items/items";
import {Api} from '../api/api';

@Injectable()
export class GlobalProvider {

  public items: Array <any> = [];

  constructor(public http: HttpClient,private api: Api) {

  }

  //usada desde los componentes para preparar la info qe viene en array de la api
  chargeInfo(origin,destination,type,havelink,endpoint){  
  	for(let i=0;i<=origin.length;i++){
  		if(origin[i]!= undefined){
  			let aux = new ItemsModel(origin[i],type,havelink,endpoint);  
  			destination.push(aux);
  		}
  	}
  }

  //usada desde las secciones para devolver la info de la api
  getInfo(ident,endPoint){
    if(ident!=0){
      endPoint+="/"+ident;
    }
    this.api.post(endPoint).subscribe((resp) => {
     
    if(ident!=0){
      this.items.push(resp.json());
    }else{
      let aux = resp.json();
      this.items=aux.results;
    }
    
  });

  }
}
