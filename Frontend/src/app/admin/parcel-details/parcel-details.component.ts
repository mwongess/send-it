import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ParcelsService } from 'src/app/shared/services/parcels.service';

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
    status:  ''
  }
  constructor() {}

  ngOnInit(): void {
    
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
