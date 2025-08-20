import {Injectable} from '@angular/core';
import {Product, CartItem} from '../models/products.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartSer {
  private cartKey = 'cart_items';
  private cartItems: CartItem[] = [];

  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor() {
    const storedCart = localStorage.getItem(this.cartKey);
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
      this.cartSubject.next(this.cartItems);
    }
  }

  addToCart(product: Product, quantity: number) {
    const index = this.cartItems.findIndex(item => item.product.id === product.id);

    if (index > -1) {
      this.cartItems[index].quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }

    this.updateLocalStorage();
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    this.updateLocalStorage();
  }

  clearCart() {
    this.cartItems = [];
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cartItems));
    this.cartSubject.next(this.cartItems);
  }

  getCart() {
    return this.cartItems;
  }
}
