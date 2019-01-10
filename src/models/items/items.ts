export class ItemsModel {

    url: string;
    type: string;
    havelink: string;
    text: string;
    endpoint: string;
    ident: number;

    constructor(url,type,havelink,endpoint) {
        this.url=url;
        this.type=type;
        this.havelink=havelink;
        this.endpoint=endpoint;
    }

}


