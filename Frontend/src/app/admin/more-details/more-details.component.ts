import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getParcel } from 'src/app/shared/state/parcel.reducer';
import * as Actions from '../../shared/state/parcel.actions';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css'],
})
export class MoreDetailsComponent implements OnInit {
  markerPositions: google.maps.LatLngLiteral[] = [];
  longitude!: number;
  latitude!: number;
  id!: string | number;
  order: any;
  display: any;

  center: google.maps.LatLngLiteral = {
    lat: 1.3836406165683048,
    lng: 38.621918374999986,

  };

  zoom = 6;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
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
      this.latitude = parseFloat(this.order.lat);
      this.longitude =parseFloat(this.order.lon);
      // this.longitude = 37.87999999999999;
      // this.latitude = -1.12;
      this.markerPositions.push({ lat: this.latitude, lng: this.longitude });
      console.log(this.markerPositions)
    });
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  onDelete() {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.store.dispatch(Actions.DELETE_PARCEL({ id: this.id }));
    this.store.dispatch(Actions.LOAD_PARCELS());
    this.router.navigate(['admin/dashboard/parcels']);
  }
}
