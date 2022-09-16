import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inewuser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) { }
  onSignUp(user: Inewuser) {
    return this.http.post('http://localhost:4003/user/signup', user);
    
  }
  onLogin(user: any) {
    return this.http.post('http://localhost:4003/user/login', user);
  }
  checkUser(token: string) {
    return this.http.get('http://localhost:4003/user/check',{
      headers: new HttpHeaders({ token }),
    });
  }
}
