import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartSer} from '../service/cart-ser';
import {CartItem} from '../models/products.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartSer) {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  increaseQuantity(productId: number) {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item) item.quantity++;
  }

  decreaseQuantity(productId: number) {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item && item.quantity > 1) item.quantity--;
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  getTotal() {
    return this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }
}
