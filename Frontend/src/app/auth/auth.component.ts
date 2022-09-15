import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { UsersService } from '../shared/services/users.service';
interface Inewuser {
  Name?: string;
  Country: string;
  Email: string;
  Password: string;
}
interface Iuser {
  email: string;
  password: string;
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
    email: '',
    password: '',
  };
  userData: any
  myData: any
  constructor(private router: Router, private authService: AuthService,private userService: UsersService) {}

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
    this.user.email = form.value.email;
    this.user.password = form.value.password;

    // check mode +++ Sign up or sign in ++++
    if (this.isLoginMode) {
      this.userService.onLogin(this.user).subscribe(data => {
        this.userData = data
        localStorage.setItem('token', this.userData.token)
        this.userService.checkUser(this.userData.token).subscribe((frmjwt) => {
          this.myData = frmjwt;
          return this.authService.login(this.myData.role);
        });
      });
      form.reset()
    } else {
      console.log(this.newuser);
      form.reset();
    }
  }
}
