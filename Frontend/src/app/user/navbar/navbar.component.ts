import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  token: string = '';
  user: any;
  shownow = false;
  filteredStatus: string = '';
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
       this.token = localStorage.getItem('token')!;
       this.userService.checkUser(this.token).subscribe((data) => {
         this.user = data;
       });
  }

  dropDown() {
      this.shownow = !this.shownow;
    }
}
