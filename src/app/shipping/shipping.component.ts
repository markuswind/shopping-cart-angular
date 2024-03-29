import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

/*
 * COMPONENT
 */

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingPrices;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingPrices = this.cartService.getShippingPrices();
  }
}
