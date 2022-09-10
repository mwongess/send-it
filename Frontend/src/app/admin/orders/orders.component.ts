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
  parcels$ = this.store.select(getParcels)
  filterString: string = ''
  constructor(
    private router: Router,
    private parcel: ParcelsService,
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(Actions.LOAD_PARCELS());
  }


  // loadOrders() {
    
  // }
}
