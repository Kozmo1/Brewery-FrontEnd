import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  cartItems: CartItem[] = [];

  constructor(private fb: FormBuilder, private cartService: CartService) {
    this.checkoutForm = this.fb.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  get total() {
    return this.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      console.log('Checkout submitted:', this.checkoutForm.value);
      console.log('Cart items:', this.cartItems);
      this.cartService.clearCart();
      alert('Order placed! 🍻');
    }
  }
}
