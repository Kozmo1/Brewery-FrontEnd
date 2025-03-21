import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Single Hop IPA',
      image: 'SingleHop.webp',
      description: 'A single Hop IPA made with Galaxy hops. Notes of passionfruit, peach, citrus, and guava. 6% alc/vol',
      price: 3.99
    },
    {
      name: 'Out of Office Tropical IPA',
      image: 'OutOfOffice.webp',
      description: 'This Tropical IPA is bursting with juicy notes of pineapple, tangerine, and passionfruit. 6.2% alc/vol',
      price: 3.99
    },
    {
      name: 'Dry Hopped Wheat Ale',
      image: 'muskoka_dry.webp',
      description: 'This Wheat Ale features notes of pineapple, tangerine, and passionfruit. 6.2% alc/vol',
      price: 3.99
    },
    {
      name: 'Mullets and Moustaches Aussie Middy',
      image: 'MulletsAndMoustaches.webp',
      description: 'A hazy lemon hue with tropical and citrusy aroma. Sweet tangerine, passionfruit, zesty citrus peel, and juicy peach. 4% alc/vol',
      price: 4.99
    }
  ];
}
