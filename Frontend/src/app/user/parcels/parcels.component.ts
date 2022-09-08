import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css']
})
export class ParcelsComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
   
  }
  moreDetails(id: string) {
    // fetch more details from the db pertaining this particular item
  }
}
