import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedInSubject = new BehaviorSubject<boolean>(false);
  public adminLoggedInSubject = new BehaviorSubject<boolean>(false);

  loggedIn$ = this.loggedInSubject.asObservable();
  adminLoggedIn$ = this.adminLoggedInSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    // Only call checkToken if running in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.checkToken();
    }
  }

  login(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
    this.loggedInSubject.next(true);
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.loggedInSubject.next(false);
  }

  private checkToken() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      this.loggedInSubject.next(!!token);
    }
  }
}
