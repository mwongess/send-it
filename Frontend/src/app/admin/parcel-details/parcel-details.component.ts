import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { getParcel, getParcels } from 'src/app/shared/state/parcel.reducer';
import { Store } from '@ngrx/store';
import { ParcelsService } from 'src/app/shared/services/parcels.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as Actions from '../../shared/state/parcel.actions';

interface IParcel {
  name: string;
  id: string;
  destination: string;
  from: string;
  to: string;
  status: string;
}
@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.css'],
})
export class ParcelDetailsComponent implements OnInit {
  parcels$ = this.store.select(getParcels);
  id!: string | number;
  updateParcelForm!: FormGroup;
  
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private parcel: ParcelsService,
    router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.store.dispatch(Actions.SELECTED_PARCEL_ID({ id: this.id }));
    this.store.select(getParcel).subscribe((data) => {
      this.updateParcelForm = new FormGroup({
        name: new FormControl(data?.name),
        id: new FormControl(data?.id),
        destination: new FormControl(data?.destination),
        weight: new FormControl(null),
        from: new FormControl(data?.from),
        price: new FormControl(null),
        to: new FormControl(data?.to),
        status: new FormControl(data?.status),
      });
    }
      
    
      
    );
    
  }

  onSubmit() {
    // send the inputs data to database
  }
}
