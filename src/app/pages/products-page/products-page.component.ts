import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  providers: [DataService]
})
export class ProductsPageComponent implements OnInit {
  public products: any[] = [];

  constructor(private dataService: DataService, private cartService: CartService) {
    this.getProducts();
  }

  ngOnInit() {
  }

  getProducts() {
    this.dataService
      .getProducts()
      .subscribe(res => {
        this.products = res;
      }, error => {
        console.log(error);
      });
  }

  addToCart(product) {
    this.cartService.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
}
