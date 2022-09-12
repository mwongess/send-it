import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
interface Inewuser {
  Name?: string;
  Country: string;
  Email: string;
  Password: string;
}
interface Iuser {
  Email: string;
  Password: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  newuser: Inewuser = {
    Name: '',
    Country: '',
    Email: '',
    Password: '',
  };
  user: Iuser = {
    Email: '',
    Password: '',
  };
  constructor(private router: Router,private authService: AuthService) {}

  ngOnInit(): void {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    // new user details during sign up
    this.newuser.Name = form.value.username;
    this.newuser.Country = form.value.county;
    this.newuser.Email = form.value.email;
    this.newuser.Password = form.value.password;

    //user details during sign in
    this.user.Email = form.value.email;
    this.user.Password = form.value.password;

    // check mode +++ Sign up or sign in ++++
    if (this.isLoginMode) {
      if (this.user.Email == "amos@gmail.com" && this.user.Password == "1to34567") {
        this.authService.login()
          this.router.navigate(['/admin/dashboard']);
      } else {
        this.authService.login()
        this.router.navigate(['user/parcels']);
      }

    } else {
      console.log(this.newuser);
      form.reset();
    }
  }
}
