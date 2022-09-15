import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

interface Iuser{
  name: string
  role: string
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  token: string = '';
  user: any 
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token')!;
    this.userService.checkUser(this.token).subscribe((data) => {
      this.user = data
    })
    // console.log(this.data)
  }
}
