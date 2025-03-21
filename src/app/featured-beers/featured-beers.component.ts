import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-beers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './featured-beers.component.html',
  styleUrls: ['./featured-beers.component.css']
})
export class FeaturedBeersComponent {
  beers = [
    {
      id: 'out-of-office-tropical-ipa',
      name: 'Out of Office Tropical IPA',
      image: 'OutOfOffice.webp',
      description: 'This Tropical IPA is bursting with juicy notes of pineapple, tangerine and passionfruit.',
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
      description: 'Juicy notes of pineapple, tangerine, and passionfruit. 6.2% alc/vol',
      price: 3.99
    },
    {
      id: 'mullets-and-moustaches',
      name: 'Mullets and Moustaches Aussie Middy',
      image: 'MulletsAndMoustaches.webp',
      description: 'Pouring a hazy lemon hue with a tropical and citrusy aroma. This Australian Middy features sweet tangerine notes with passionfruit, zesty citrus peel, and juicy peach.',
      price: 4.99
    }
  ];
}
