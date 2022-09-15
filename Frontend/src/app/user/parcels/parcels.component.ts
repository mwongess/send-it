import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css'],
})
export class ParcelsComponent implements OnInit {
  parcels: any;
  // parcels$: any
  // parcels$ = this.store.select(getParcels);
  filterString: string = '';
  constructor() {}

  ngOnInit(): void {}
  moreDetails(id: string) {
    // fetch more details from the db pertaining this particular item
  }
  trOnclick(id: string) {
    
  }
}
