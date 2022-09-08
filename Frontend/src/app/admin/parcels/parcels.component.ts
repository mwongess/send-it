import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css']
})
export class ParcelsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    //querry db for all parcels

  }
  onMoreDetails() {
  }

  seeMore(id: string) {
    // query the db for any data related to this id
  }
}
