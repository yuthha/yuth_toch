import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CartSer} from '../../service/cart-ser';
import {Product} from '../../models/products.model';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {ProductSer} from '../../service/product-ser';

@Component({
  selector: 'app-product-detail',
  imports: [
    CurrencyPipe,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {
  product!: Product;
  quantity = 1;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductSer,
    private cartService: CartSer
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (data) => {
          this.product = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error loading product', err);
          this.loading = false;
        }
      });
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
