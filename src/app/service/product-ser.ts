import { Injectable } from '@angular/core';
import {Product} from '../models/products.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductSer {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: string) {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }
}
