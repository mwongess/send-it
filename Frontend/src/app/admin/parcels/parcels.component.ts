import { Component, OnInit } from '@angular/core';
import { ParcelsService } from 'src/app/shared/services/parcels.service';
import { Store } from '@ngrx/store';
import * as Actions from '../../shared/state/parcel.actions';
import { getParcels } from 'src/app/shared/state/parcel.reducer';


@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css'],
})
export class ParcelsComponent implements OnInit {
  statuses: string[] = []
  totalOrders!: number
  receivedOrders!: number
  pendingOrders!: number
  cancelledOrders!: number

  parcels$ = this.store.select(getParcels)
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(Actions.LOAD_PARCELS());
    this.parcels$.subscribe(pac => pac.forEach(element=> {
      this.statuses.push(element.status as string)
      this.totalOrders = this.statuses.length/2
      this.pendingOrders = this.statuses.filter(x=> x=='Shipping').length/2
      this.receivedOrders = this.statuses.filter(x=> x=='Delivered').length/2
      this.cancelledOrders = this.statuses.filter(x=> x=='Cancelled').length/2
    }))

    //querry db for all parcels
  }
  onMoreDetails() {}

  seeMore(id: string) {
    // query the db for any data related to this id
  }
}
