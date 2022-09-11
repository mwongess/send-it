import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getParcels } from 'src/app/shared/state/parcel.reducer';

@Component({
  selector: 'app-pickups',
  templateUrl: './pickups.component.html',
  styleUrls: ['./pickups.component.css'],
})
export class PickupsComponent implements OnInit {
  rating!: number
  parcels$ = this.store.select(getParcels);
  Math!: Math;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.rating = Math.floor(Math.random() * (5 - 1)) + 1
  }
}
