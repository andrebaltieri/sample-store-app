import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  providers: [DataService]
})
export class ProductDetailsPageComponent implements OnInit {
  private id: '';
  private product: any = {};

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getProduct();
    });
  }

  getProduct() {
    this.dataService
      .getProduct(this.id)
      .subscribe(res => {
        this.product = res;
      }, error => {
        console.log(error);
      });
  }

}
