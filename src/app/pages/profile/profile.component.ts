import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Profile {
  name: string;
  shippingAddress: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
  } | null;
  tasteProfile: {
    primaryFlavor?: string;
    secondaryFlavors?: string;
    sweetness?: string;
    bitterness?: string;
    mouthfeel?: string;
    body?: string;
    acidity?: number;
    aftertaste?: string;
    aroma?: string;
  } | null;
  orders: {
    id: number;
    orderDate: string;
    deliveryDate: string | null;
    status: string;
    totalPrice: number;
    shippingAddress: {
      street: string;
      city: string;
      province: string;
      postalCode: string;
    };
    items: {
      id: number;
      product: string;
      quantity: number;
      priceAtOrder: number;
    }[];
  }[];
  payments: {
    paymentId: number;
    orderId: number;
    amount: number;
    paymentMethod: string;
    status: string;
    processedAt: string;
  }[];
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile | null = null;
  private profileUrl = 'http://localhost:5089/api/auth/profile';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  activeTab: 'details' | 'payments' | 'recommendations' | 'orders' = 'details';

  preferences = {
    taste: 'hoppy',
    type: 'ipa'
  };

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found.');
        return;
      }

      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this.http.get<Profile>(this.profileUrl, { headers }).subscribe({
        next: (data) => {
          this.profile = data;
          console.log(data);
        },
        error: (error) => {
          console.error("Error fetching profile:", error);
        }
      });
    }
  }
}
