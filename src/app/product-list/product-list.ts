import { Component, OnInit } from '@angular/core';
import {ProductCard} from './product-card/product-card';
import {Product} from '../models/products.model';
import {ProductSer} from '../service/product-ser';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCard,
    CommonModule
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  products: Product[] = [];
  loading = true;

  constructor(private productService: ProductSer) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
        this.loading = false;
      }
    });
  }

  trackById(index: number, item: Product) {
    return item.id;
  }
}
