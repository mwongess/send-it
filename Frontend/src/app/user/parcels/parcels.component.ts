import { Component, OnInit } from '@angular/core';
import * as Actions from '../../shared/state/parcel.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getParcels } from 'src/app/shared/state/parcel.reducer';

@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css'],
})
export class ParcelsComponent implements OnInit {
  token: string = '';
  email: string = '';
  parcels: any;
  parcels$ = this.store.select(getParcels);
  filterString: string = '';
  constructor(
    private router: Router,
    private store: Store,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(Actions.LOAD_PARCELS());
    this.parcels$.subscribe((data) => {
      this.email = localStorage.getItem('email')!;

      this.parcels = data.filter((own) => {
        return own.receiver == this.email;
      });
    });
  }

  trOnclick(id: string | number) {
    this.router.navigate([`/user/dashboard/parcel/details/${id}`], {
      relativeTo: this.route,
    });
  }
}
