import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ILocation } from 'src/app/shared/models/location.model';
import * as Actions from '../../shared/state/parcel.actions';

@Component({
  selector: 'app-new-parcel',
  templateUrl: './new-parcel.component.html',
  styleUrls: ['./new-parcel.component.css'],
})
export class NewParcelComponent implements OnInit {
  newParcelForm!: FormGroup;
  location: ILocation = {
    lat: 0,
    lng: 0,
  };
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.location.lat = localStorage.getItem('lat') as unknown as number;
    this.location.lng = localStorage.getItem('lng') as unknown as number;
    this.newParcelForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      sender: new FormControl(null, Validators.required),
      sendername: new FormControl(null, Validators.required),
      receiver: new FormControl(null, Validators.required),
      receivername: new FormControl(null, Validators.required),
      weight: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      destination: new FormControl(null, Validators.required),
      lat: new FormControl(this.location.lat),
      lng: new FormControl(this.location.lng),
    });

    this.newParcelForm.get('weight')?.valueChanges.subscribe((res) => {
      this.newParcelForm.get('price')!.setValue(res * 19);
    });
  }
  AddressChange(adress: any) {
    localStorage.setItem('lat', adress.geometry.location.lat());
    localStorage.setItem('lng', adress.geometry.location.lng());
  }
  onSubmit() {
    this.store.dispatch(
      Actions.ADD_PARCEL({ newParcel: this.newParcelForm.value })
    );
    this.store.dispatch(Actions.LOAD_PARCELS());
    this.router.navigate(['admin/dashboard/parcels']);
  }
}
