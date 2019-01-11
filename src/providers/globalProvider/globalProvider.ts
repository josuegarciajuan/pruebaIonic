import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, RequestOptions, URLSearchParams, Headers} from '@angular/http';
import { ItemsModel } from "../../models/items/items";
import {Api} from '../api/api';

@Injectable()
export class GlobalProvider {

  public films: Array <any> = [];
  public starships: Array <any> = [];
  public vehicles: Array <any> = [];
  public quedanPages: boolean;

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
  getInfo(arr,ident,endPoint,pag?: any, ttime?: number){

    if(!ttime){
      ttime=1;
    }
    if(ident!=0){
      endPoint+="/"+ident;
    }
    if(pag){
      endPoint+="/?page="+pag; 
    }
    this.api.get(endPoint).subscribe((resp) => {
     
      if(ident!=0){
        this[arr].push(resp.json());
      }else{
        let aux = resp.json();
        if(ttime==1){
          this[arr]=aux.results;
        }else{
          this[arr]=this[arr].concat(aux.results);
        }
        if(aux.next==null){
          this.quedanPages=false;
        }
      }
    
    });
  }


  //extrae el id de un elemento en base a la url
  getIdFromUrl(url){
    let splited=url.split('/');
    return splited[splited.length-2];
  }

}
