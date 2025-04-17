import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CartService, CartItem } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';

interface Beer {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Beer | undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.http.get<Beer>(`http://localhost:3001/inventory/${id}`).subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (err) => {
          console.error('Error fetching product:', err);
        }
      });
    });
  }

  addToCart(beer: Beer): void {
    const item: CartItem = {
      id: beer.id,
      name: beer.name,
      price: beer.price,
      quantity: 1,
      image: beer.image
    };
    this.cartService.addToCart(item);
    this.toast.show(`${beer.name} added to cart!`);
  }
}
