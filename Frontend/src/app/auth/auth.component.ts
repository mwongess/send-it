import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
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
  constructor() {}

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

    // check mode
    if (this.isLoginMode) {
      console.log(this.user);
    } else {
      console.log(this.newuser);
      form.reset();
    }
  }
}
