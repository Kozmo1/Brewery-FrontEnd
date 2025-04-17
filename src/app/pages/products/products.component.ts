import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export interface Beer {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Beer[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Beer[]>('http://localhost:3001/inventory')
      .subscribe({
        next: (data) => {
          this.products = data.slice(0, 10);
        },
        error: (err) => {
          console.error('Error fetching beer data:', err);
        }
      });
  }
}
