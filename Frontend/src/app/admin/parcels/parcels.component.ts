import { Component, OnInit } from '@angular/core';
import { ParcelsService } from 'src/app/shared/services/parcels.service';

@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css'],
})
export class ParcelsComponent implements OnInit {
  filteredStatus: string= ''
  Parcels!: any;
  constructor(
    private parcels: ParcelsService,
    private status: ParcelsService
  ) {}

  ngOnInit(): void {
    //querry db for all parcels
    this.filteredStatus = this.status.filteredStatus
    this.Parcels = this.parcels.allparcels;
  }
  onMoreDetails() {}

  seeMore(id: string) {
    // query the db for any data related to this id
    this.parcels.onseeMore(id);
  }
}
