import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  public username = '';
  public totalItems = 0;

  constructor(private router: Router, private cartService: CartService) {
    this.username = localStorage.getItem('username');

    this.cartService.cartChange.subscribe((data) => {
      this.totalItems = data.length;
    });
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
