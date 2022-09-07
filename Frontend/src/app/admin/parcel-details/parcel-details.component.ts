import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  updateParcelForm!: FormGroup;
  Parcel: IParcel = {
    name: '',
    id: '',
    destination: '',
    from: '',
    to: '',
    status:  ''
  }
  constructor() {}

  ngOnInit(): void {
    // get data to be populated in the inputs
    this.Parcel.name="Amos"
    this.Parcel.id="Amos"
    this.Parcel.destination="Amos"
    this.Parcel.from="Amos"
    this.Parcel.to="Me"
    this.Parcel.status="Delivered"
    // populate above data in the form inputs
    this.updateParcelForm = new FormGroup({
      'name': new FormControl(this.Parcel.name),
      'id': new FormControl(this.Parcel.id),
     'destination': new FormControl(this.Parcel.destination),
     'from': new FormControl(this.Parcel.from),
      'to': new FormControl(this.Parcel.to),
      'status': new FormControl(this.Parcel.status),
    });
  }
  onSubmit() {
    // send the inputs data to database
  }
}
