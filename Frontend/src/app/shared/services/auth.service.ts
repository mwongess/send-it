import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn = true;

  constructor(private router: Router) {}
  isAuthenticated(): Promise<boolean> {
    const promise: Promise<boolean> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 500);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
    console.log(this.loggedIn)
  //  this.router.navigate(['user/parcels']);

    this.router.navigate(['/admin']);

    // if (role === 'Admin') {
    //   this.router.navigate(['/admin/dashboard']);
    // } else if (role === 'User') {
    //   this.router.navigate(['/user/dashboard']);
    // } else {
    //   this.router.navigate(['/auth']);
    // }
  }
  logout() {
    this.loggedIn = false;
  }
}
