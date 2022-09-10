import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  onLogin(user: any) {
    return this.http.get('http://localhost:3002/users', user);
  }
}
