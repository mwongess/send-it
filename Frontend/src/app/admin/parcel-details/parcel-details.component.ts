import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { getParcel, getParcels } from 'src/app/shared/state/parcel.reducer';
import { Store } from '@ngrx/store';
import { ParcelsService } from 'src/app/shared/services/parcels.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as Actions from '../../shared/state/parcel.actions';



interface IParcel{
  name: string
  id: string
  destination: string
  from: string
  to: string
  status: string
}
@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.css'],
})
export class ParcelDetailsComponent implements OnInit {
  parcels$ = this.store.select(getParcels);
  id!: string | number;
  order$ = this.store.select(getParcel);
  arr!: any;
  Users!: any;
  myOrder!: any;
  updateParcelForm!: FormGroup;
  Parcel: IParcel = {
    name: '',
    id: '',
    destination: '',
    from: '',
    to: '',
    status: '',
  };
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private parcel: ParcelsService,
    router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = +param['id'];
    });
    this.store.dispatch(Actions.SELECTED_PARCEL_ID({ id: this.id }));

    this.updateParcelForm = new FormGroup({
      name: new FormControl(this.Parcel.name),
      id: new FormControl(this.Parcel.id),
      destination: new FormControl(this.Parcel.destination),
      from: new FormControl(this.Parcel.from),
      to: new FormControl(this.Parcel.to),
      status: new FormControl(this.Parcel.status),
    });
  }

  onSubmit() {
    // send the inputs data to database
  }
}
