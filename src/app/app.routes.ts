import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent }, // Homepage at "/"
  { path: 'products', component: ProductsComponent }, // Products at "/products"
  { path: 'products/:id', component: ProductDetailComponent } // Dynamic Product Page
];
