import {Injectable} from '@angular/core';
import {Http, RequestOptions, URLSearchParams, Headers} from '@angular/http';
import {AppEnv} from '../../app/app.env';
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {

    constructor(
        public http: Http,
        public appEnv: AppEnv,
    ) {}

    get(endpoint: string, params?: any, options?: RequestOptions, api_token?: string) {
        if (!options) {
            options = new RequestOptions();
        }
  
        // Support easy query params for GET requests
        if (params) {
            let p = new URLSearchParams();
            for (let k in params) {
                p.set(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;

        }
        if (api_token) {
            let headers = new Headers();
            headers.append('authorization', 'Bearer ' + api_token);
            options.headers = headers;
        }
        return this.http.get(this.appEnv.API_URL + '/' + endpoint, options);
    }

    post(endpoint: string, body: any, options?: RequestOptions, api_token?: string) {
        if (!options) {
            options = new RequestOptions();
        }
        if (api_token) {
            let headers = new Headers();
            headers.append('authorization', 'Bearer ' + api_token);
            options.headers = headers;
        }
        return this.http.post(this.appEnv.API_URL + '/' + endpoint, body, options);
    }

    put(endpoint: string, body: any, options?: RequestOptions, api_token?: string) {
        if (!options) {
            options = new RequestOptions();
        }
        if (api_token) {
            let headers = new Headers();
            headers.append('authorization', 'Bearer ' + api_token);
            options.headers = headers;
        }
        return this.http.put(this.appEnv.API_URL + '/' + endpoint, body, options);
    }

    delete(endpoint: string, body: any, options?: RequestOptions, api_token?: string) {
        if (!options) {
            options = new RequestOptions();
        }
        if (api_token) {
            let headers = new Headers();
            headers.append('authorization', 'Bearer ' + api_token);
            options.headers = headers;
        }
        return this.http.post(this.appEnv.API_URL + '/' + endpoint, body, options);
    }

    patch(endpoint: string, body: any, options?: RequestOptions) {
        return this.http.put(this.appEnv.API_URL + '/' + endpoint, body, options);
    }

    uploadFile(endpoint: string, filePath: string, api_token: string): Promise<any> {
        const fileTransfer: FileTransferObject = this.transfer.create();

        let options: FileUploadOptions = {
            fileKey: 'attachment',
            //            httpMethod: 'PUT',
            //            fileName: 'name.jpg',
            //            params: {parametroPrueba: 'valor parametro prueba'},
            headers: {
                authorization: 'Bearer ' + api_token,
            }
        }

        return fileTransfer.upload(filePath, this.appEnv.API_URL + '/' + endpoint, options);
    }

}