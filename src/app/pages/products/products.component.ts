import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      id: 'out-of-office-tropical-ipa',
      name: 'Out of Office Tropical IPA',
      image: 'OutOfOffice.webp',
      description: 'This Tropical IPA is bursting with juicy notes of pineapple, tangerine, and passionfruit.',
      price: 3.99
    },
    {
      id: 'single-hop-ipa',
      name: 'Single Hop IPA',
      image: 'SingleHop.webp',
      description: 'A single Hop IPA made with Galaxy hops. Notes of passionfruit, peach, citrus and a touch of guava.',
      price: 3.99
    },
    {
      id: 'muskoka-dry-hopped',
      name: 'Dry Hopped Wheat Ale',
      image: 'muskoka_dry.webp',
      description: 'This Tropical IPA is bursting with juicy notes of pineapple, tangerine and passionfruit.',
      price: 3.99
    },
    {
      id: 'mullets-and-moustaches',
      name: 'Mullets and Moustaches Aussie Middy',
      image: 'MulletsAndMoustaches.webp',
      description: 'Pouring a hazy lemon hue with a tropical and citrusy aroma...',
      price: 4.99
    }
  ];
}
