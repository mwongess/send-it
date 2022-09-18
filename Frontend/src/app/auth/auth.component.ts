import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Inewuser, Iuser } from '../shared/models/user.model';
import { AuthService } from '../shared/services/auth.service';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  Email = ''
  Password = ''
  isLoginMode = true;
  newuser: Inewuser = {
    name: '',
    email: '',
    password: '',
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
    this.newuser.name = form.value.name;
    this.newuser.email = form.value.email;
    this.newuser.password = form.value.password;

    //user details during sign in
    this.user.email = form.value.email;
    this.user.password = form.value.password;

    // check mode +++ Sign up or sign in ++++
    if (this.isLoginMode) {
      this.userService.onLogin(this.user).subscribe(data => {
        this.userData = data
        localStorage.setItem('token', this.userData.token)
        localStorage.setItem('email', this.user.email )
        this.userService.checkUser(this.userData.token).subscribe((frmjwt) => {
          this.myData = frmjwt;
          return this.authService.login(this.myData.role);
        });
      });
      form.reset()
    } else {
      console.log(this.newuser)
      this.userService.onSignUp(this.newuser).subscribe(res => {
        this.router.navigate(['/auth'])
        this.Email = this.newuser.email
        this.Password  = this.newuser.password
        console.log(res)
      })
      this.Email = this.newuser.email;
      this.Password = this.newuser.password;
      // form.reset();
      this.router.navigate(['/auth']);
    }
  }
}
