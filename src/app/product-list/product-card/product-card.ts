import {Component, Input} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {ToKHRPipe} from '../../custom-pipe/to-khr-pipe';
import {Product} from '../../models/products.model';
import {CartSer} from '../../service/cart-ser';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe,
    ToKHRPipe,
    RouterLink
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;

  constructor(private cartService: CartSer, private router: Router) {}

  addProductToCart() {
    // @ts-ignore
    this.cartService.addToCart(this.product);
  }

  goToDetail() {
    this.router.navigate(['/products', this.product.id]);
  }
}
