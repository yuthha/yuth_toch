import {Component, NgModule, OnInit} from '@angular/core';
import {CartSer} from '../service/cart-ser';
import {CommonModule, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [
    CurrencyPipe,
    CommonModule
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements OnInit {
  // @ts-ignore
  cartItems: CartItem[] = [];

  constructor(private cartService: CartSer) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  getTotal() {
    return this.cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  placeOrder() {
    if (this.cartItems.length === 0) {
      alert('🛒 Your cart is empty!');
      return;
    }
    alert('🎉 Order placed successfully!');
    this.cartService.clearCart();
  }
}
