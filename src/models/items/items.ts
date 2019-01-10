export class ItemsModel {
    ident: string;
    url: string;
    tipo: string;

    constructor(tipo,ident) {
    	this.tipo=tipo;
    	switch(tipo){
    		case "planet":
    			this.ident=ident;
    			break;

    	}


    }

}

