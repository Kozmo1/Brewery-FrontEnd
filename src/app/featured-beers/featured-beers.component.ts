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
  selector: 'app-featured-beers',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './featured-beers.component.html',
  styleUrls: ['./featured-beers.component.css']
})
export class FeaturedBeersComponent {
  beers: Beer[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Beer[]>('http://localhost:3001/')
      .subscribe({
        next: (data) => {
          this.beers = data;
        },
        error: (err) => {
          console.error('Error fetching beer data:', err);
        }
      });
  }
}
