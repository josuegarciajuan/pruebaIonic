import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, RequestOptions, URLSearchParams, Headers} from '@angular/http';
import { ItemsModel } from "../../models/items/items";
import {Api} from '../api/api';

@Injectable()
export class GlobalProvider {

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
//  getInfo(ident,endPoint){
//    console.log("pasogetInfo1");
//    let arr: Array <any> = [];  
//    console.log("pasogetInfo12");
//    if(ident!=0){
//      endPoint+="/"+ident;
//    }
//    console.log("pasogetInfo123");
//    this.api.post(endPoint).subscribe((resp) => {
//      console.log("pasogetInfo125");
//    if(ident!=0){
//      arr.push(resp.json());
//    }else{
//      console.log("pasogetInfo124");
//      let aux = resp.json();
//      arr=aux.results;
//    }
//    console.log("pasogetInfo2");
//    return arr;  
//  });

//  }
}
