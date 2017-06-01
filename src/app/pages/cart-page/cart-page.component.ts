import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  providers: [DataService]
})
export class CartPageComponent implements OnInit {
  public items: any[] = [];
  public total = 0;

  constructor(private dataService: DataService, private cartService: CartService) {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getSubTotal();
  }

  ngOnInit() {
  }

}
