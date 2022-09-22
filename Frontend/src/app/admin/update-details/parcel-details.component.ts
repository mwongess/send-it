import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { getParcel, getParcels } from 'src/app/shared/state/parcel.reducer';
import { Store } from '@ngrx/store';
import { ParcelsService } from 'src/app/shared/services/parcels.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as Actions from '../../shared/state/parcel.actions';
import { ILocation } from 'src/app/shared/models/location.model';

@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.css'],
})
export class ParcelDetailsComponent implements OnInit {
  parcels$ = this.store.select(getParcels);
  generatedOrder: any
  id!: string | number;
  longitude!: number;
  latitude!: number;
  updateParcelForm!: FormGroup;
  location: ILocation = {
    lat: 0,
    lng: 0,
  };
  payload: any;
  display: any;
  markerPositions: google.maps.LatLngLiteral[] = [];

  center: google.maps.LatLngLiteral = {
    lat: 1.3836406165683048,
    lng: 38.621918374999986,
  };
  zoom = 6;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.store.dispatch(Actions.SELECTED_PARCEL_ID({ id: this.id }));

    this.store.select(getParcel).subscribe((data) => {
      this.generatedOrder= data
      this.updateParcelForm = new FormGroup({
        name: new FormControl(data?.name),
        id: new FormControl(data?.id),
        status: new FormControl(data?.status),
        destination: new FormControl(data?.destination),
        sender: new FormControl(data?.sender),
        sendername: new FormControl(data?.sendername),
        receiver: new FormControl(data?.receiver),
        receivername: new FormControl(data?.receivername),
        weight: new FormControl(data?.weight),
        price: new FormControl(data?.price),
      });
      this.latitude = parseFloat(this.generatedOrder.lat);
      this.longitude = parseFloat(this.generatedOrder.lon);
      this.markerPositions.push({ lat: this.latitude, lng: this.longitude });
    });
    this.updateParcelForm.get('weight')?.valueChanges.subscribe((res) => {
      this.updateParcelForm.get('price')!.setValue('$ ' + res * 19);
    });
  }

  onSubmit() {
    this.payload = {
      ...this.updateParcelForm.value,
      lat: this.location.lat,
      lng: this.location.lng,
    };
    this.store.dispatch(
      Actions.UPDATE_PARCEL({
        id: this.id,
        updatedParcel: this.payload,
      })
    );
    this.store.dispatch(Actions.LOAD_PARCELS());
    this.router.navigate(['admin/dashboard/parcels']);
  }
  AddressChange(adress: any) {
    this.location.lat = adress.geometry.location.lat();
    this.location.lng = adress.geometry.location.lng();
  }
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
