import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';
import { CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: any;
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
      description: 'Juicy notes of pineapple, tangerine, and passionfruit. 6.2% alc/vol',
      price: 3.99
    },
    {
      id: 'mullets-and-moustaches',
      name: 'Mullets and Moustaches Aussie Middy',
      image: 'MulletsAndMoustaches.webp',
      description: 'Pouring a hazy lemon hue with a tropical and citrusy aroma. This Australian Middy features sweet tangerine notes with passionfruit, zesty citrus peel, and juicy peach. The finish is balanced, refreshing, and crisp!',
      price: 4.99
    }

  ];

  constructor(private route: ActivatedRoute, private cartService: CartService, private toast: ToastService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product = this.products.find(p => p.id === params['id']);
    });
  }

  addToCart(beer: Beer) {
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
interface Beer {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}