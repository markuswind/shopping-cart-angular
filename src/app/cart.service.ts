import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
 * SERVICE
 */

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(private httpClient: HttpClient) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getShippingPrices() {
    return this.httpClient.get('/assets/shipping.json');
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
