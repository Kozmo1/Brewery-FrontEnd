import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Needed for *ngIf, *ngFor
import { CartService, CartItem } from '../../services/cart.service';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  getTotal(): string {
    const total = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return total.toFixed(2);
  }

  increaseQuantity(item: CartItem) {
    this.cartService.updateQuantity(item.id, item.quantity + 1);
    this.cartItems = this.cartService.getItems();
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.updateQuantity(item.id, item.quantity - 1);
    this.cartItems = this.cartService.getItems();
  }

  removeItem(item: CartItem) {
    this.cartService.removeFromCart(item.id);
    this.cartItems = this.cartService.getItems();
  }
}
