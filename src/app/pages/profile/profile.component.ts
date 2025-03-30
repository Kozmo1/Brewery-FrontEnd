import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  activeTab: 'details' | 'payments' | 'recommendations' | 'orders' = 'details';

  preferences = {
    taste: 'hoppy',
    type: 'ipa'
  };

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
  
}

