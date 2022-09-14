import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn = false;

  constructor(private router: Router) { }
  isAuthenticated(): boolean {
    return this.loggedIn
  }

  login(role: string) {
    this.loggedIn = true;
    if (role === 'Admin') {
      this.router.navigate(['/admin/dashboard']);
    } else if (role === 'user') {
      this.router.navigate(['user/dashboard']);
    } else {
      this.router.navigate(['/auth']);
    }
  }
  logout() {
    this.loggedIn = false;
  }
}
