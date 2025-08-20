import { Routes } from '@angular/router';
import {ProductList} from './product-list/product-list';
import {Cart} from './cart/cart';
import {Checkout} from './checkout/checkout';
import {ProductDetail} from './product-list/product-detail/product-detail';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductList
  },
  {
    path: 'cart',
    component: Cart
  },
  {
    path: 'checkout',
    component: Checkout
  },
  {
    path: 'product/:id', // <-- new route
    component: ProductDetail
  }
];
