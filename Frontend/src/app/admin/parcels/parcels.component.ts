import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css']
})
export class ParcelsComponent implements OnInit {
  isdisplayMode = false;
  constructor() { }

  ngOnInit(): void {
  }
  onMoreDetails() {
    this.isdisplayMode =!this.isdisplayMode 
  }
}
