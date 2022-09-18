import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as Actions from '../../shared/state/parcel.actions';
import { Store } from '@ngrx/store';
import { getParcels } from 'src/app/shared/state/parcel.reducer';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  p: number = 1;
  parcels: any;
  parcels$ = this.store.select(getParcels);
  filterString: string = '';
  constructor(
    private router: Router,
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(Actions.LOAD_PARCELS());
    this.parcels$.subscribe((data) => {
      this.parcels = data;
      console.log(this.parcels.length);
    });
  }

  trOnclick(id: string | number) {
    this.router.navigate([`/admin/dashboard/parcel/details/${id}`], {
      relativeTo: this.route,
    });
  }
}
