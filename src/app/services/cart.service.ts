import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'brewCart';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  getCart(): CartItem[] {
    if (!this.isBrowser) return [];
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  saveCart(cart: CartItem[]): void {
    if (!this.isBrowser) return;
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  addToCart(item: CartItem): void {
    const cart = this.getCart();
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      cart.push(item);
    }
    this.saveCart(cart);
  }

  removeItem(id: number): void {
    const cart = this.getCart().filter(item => item.id !== id);
    this.saveCart(cart);
  }

  clearCart(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.storageKey);
    }
  }

  getItems(): CartItem[] {
    return this.getCart();
  }

  updateQuantity(id: number, newQty: number): void {
    const cart = this.getCart();
    const item = cart.find(c => c.id === id);
    if (item) {
      item.quantity = Math.max(newQty, 1);
      this.saveCart(cart);
    }
  }

  removeFromCart(id: number): void {
    this.removeItem(id);
  }
}
