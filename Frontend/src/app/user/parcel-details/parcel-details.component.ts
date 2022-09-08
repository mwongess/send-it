import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


interface IParcel {
  name: string;
  from: string;
  id: string;
  destination: string;
}

@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.css'],
})
export class ParcelDetailsComponent implements OnInit {
  parcelAllDetails!: FormGroup;
  Parcel: IParcel = {
    name: '',
    from: '',
    id: '',
    destination: '',
  };
  constructor() {}

  ngOnInit(): void {
    // fetch the more details pertaining to this particular  parcel
    this.Parcel.name = '';
    this.Parcel.from = '';
    this.Parcel.id = '';
    this.Parcel.destination = '';
    // populate more details form with data from db
    this.parcelAllDetails = new FormGroup({
      name: new FormControl(this.Parcel.name),
      from: new FormControl(this.Parcel.from),
      id: new FormControl(this.Parcel.id),
      destination: new FormControl(this.Parcel.destination),
    });
  }
}
