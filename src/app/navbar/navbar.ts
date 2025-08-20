import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {CartSer} from '../service/cart-ser';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  mobileMenuOpen = false;
  cartCount = 0;

  constructor(private cartService: CartSer) {
    // Listen for cart updates
    this.cartService.cart$.subscribe(items => {
      this.cartCount = items.length;
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
