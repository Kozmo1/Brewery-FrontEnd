import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent }, // Homepage at "/"
  { path: 'products', component: ProductsComponent } // Products at "/products"
];
