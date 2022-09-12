import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as Actions from '../../shared/state/parcel.actions';
import { Store } from '@ngrx/store';
import { ParcelsService } from 'src/app/shared/services/parcels.service';
import { getParcels } from 'src/app/shared/state/parcel.reducer';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  parcels:any
  parcels$ = this.store.select(getParcels)
  filterString: string = ''
  constructor(
    private router: Router,
    private parcel: ParcelsService,
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(Actions.LOAD_PARCELS());
     this.parcels$.subscribe(data => {
      this.parcels =data
    })
  }

  trOnclick(id: string| number) {
     this.router.navigate([`/admin/dashboard/parcel/details/${id}`], {
       relativeTo: this.route,
     });
  }
}
