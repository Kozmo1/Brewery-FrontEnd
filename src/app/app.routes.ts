import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent }, // Homepage at "/"
  { path: 'products', component: ProductsComponent }, // Products at "/products"
  { path: 'products/:id', component: ProductDetailComponent }, // Dynamic Product Page
  { path: 'cart',  loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent) }, // Cart Page
  { path: 'profile', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) }, // Profile Page 
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) }, // About Us Page
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) }, // Login Page
  { path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) }, // Register Page
  { path: 'checkout', loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent) }, // Checkout Page   
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) } // Contact Page   

]; 
