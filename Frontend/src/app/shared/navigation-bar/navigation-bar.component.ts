import { Component, OnInit } from '@angular/core';
import { ParcelsService } from '../services/parcels.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  shownow = false;
  filteredStatus: string = ''
  constructor(private status: ParcelsService) {
  }

  ngOnInit(): void {
  }
  dropDown() {
    this.shownow = !this.shownow;
  }
}
