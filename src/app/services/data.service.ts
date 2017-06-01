import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {
    private serviceUrl = 'http://sample-store-api.azurewebsites.net/';

    constructor(public http: Http) { }

    authenticate(data: any) {
        return this
            .http
            .post(this.serviceUrl + 'v1/authenticate', data)
            .map((res: Response) => res.json());
    }

    getProducts() {
        const token = localStorage.getItem('token');
        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Bearer ${token}`);
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.serviceUrl + 'v1/products', options).map((res: Response) => res.json());
    }

    getProduct(id) {
        const token = localStorage.getItem('token');
        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Bearer ${token}`);
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.serviceUrl + 'v1/products/' + id, options).map((res: Response) => res.json());
    }
}