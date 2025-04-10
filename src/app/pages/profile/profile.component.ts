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

  // Static preference values
  preferences = {
    taste: 'hoppy',
    type: 'ipa'
  };

  // Static orders data
  orders = [
    {
      id: 1001,
      date: 'Mar 12, 2025',
      items: ['Out of Office IPA', 'Single Hop IPA'],
      total: 11.98
    },
    {
      id: 1002,
      date: 'Mar 20, 2025',
      items: ['Dry Hopped Wheat Ale'],
      total: 3.99
    }
  ];

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
          console.log('Profile data:', this.profile);
        },
        error: (error) => {
          console.error("Error fetching profile:", error);
        }
      });
    } else {
      console.warn('Not running in a browser—skipping localStorage access.');
    }
  }
}
