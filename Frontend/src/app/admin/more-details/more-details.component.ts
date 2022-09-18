import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getParcel} from 'src/app/shared/state/parcel.reducer';
import * as Actions from '../../shared/state/parcel.actions';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css'],
})
export class MoreDetailsComponent implements OnInit {
  id!: string | number;
  order: any;
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.store.dispatch(Actions.SELECTED_PARCEL_ID({ id: this.id }));

    this.store.select(getParcel).subscribe((data) => {
      this.order = data;
    });
  }
  onDelete() {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.store.dispatch(Actions.DELETE_PARCEL({ id: this.id }));
    this.router.navigate(['admin/dashboard/parcels']);
    this.store.dispatch(Actions.LOAD_PARCELS());
  }
}
