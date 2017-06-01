import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {
    public items: any[] = [];
    cartChange: Observable<any>;
    cartChangeObserver: Observer<any>;

    constructor() {
        this.cartChange = new Observable((observer: Observer<any>) => {
            this.cartChangeObserver = observer;
        });
    }

    addItem(item) {
        this.items.push(item);
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.cartChangeObserver.next(this.items);
    }

    getItems(): any[] {
        const data = localStorage.getItem('cart');
        if (data) {
            this.items = JSON.parse(data);
        }
        return this.items;
    }

    getSubTotal(): number {
        let result = 0;
        for (const i of this.items) {
            result += +(+i.price * +i.quantity);
        }
        return result;
    }
}