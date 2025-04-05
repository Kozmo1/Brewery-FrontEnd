import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedInSubject = new BehaviorSubject<boolean>(false);
  public adminLoggedInSubject = new BehaviorSubject<boolean>(false); 

  loggedIn$ = this.loggedInSubject.asObservable();
  adminLoggedIn$ = this.adminLoggedInSubject.asObservable();

  constructor() {
    this.checkToken();
    this.checkAdminToken();

  }

  login(token: string) {
    localStorage.setItem('token', token);
    this.loggedInSubject.next(true);
  }

  logout() {
    localStorage.removeItem('token'); 
    this.loggedInSubject.next(false); 
  }

  private checkToken() {
    const token = localStorage.getItem('token');
    this.loggedInSubject.next(!!token);
  }



  adminLogin(token: string) {
    localStorage.setItem('adminToken', token);
    this.loggedInSubject.next(true);
  }
  adminLogout() {
    localStorage.removeItem('adminToken');
    this.loggedInSubject.next(false);
  }
  private checkAdminToken() {
    const adminToken = localStorage.getItem('adminToken');
    this.adminLoggedInSubject.next(!!adminToken); 
  }
}
