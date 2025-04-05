import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.http.post<{ token: string }>('http://localhost:3000/user/login/', {
        email,
        password
      }).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          console.log('Login success:', res);
          this.router.navigate(['/profile']); // or wherever you wanna send them
        },
        error: (err) => {
          console.error('Login failed:', err);
          alert(err.error?.message || 'Login failed');
        }
      });
    }
  }
}
