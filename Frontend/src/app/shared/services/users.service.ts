import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  onLogin(user: any) {
    return this.http.post('http://localhost:4003/user/login', user);
  }
  checkUser(token: string) {
    return this.http.get('http://localhost:4003/user/check',{
      headers: new HttpHeaders({ token }),
    });
  }
}
