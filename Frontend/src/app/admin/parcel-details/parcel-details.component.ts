import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { getParcel, getParcels } from 'src/app/shared/state/parcel.reducer';
import { Store } from '@ngrx/store';
import { ParcelsService } from 'src/app/shared/services/parcels.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as Actions from '../../shared/state/parcel.actions';

// interface IParcel {
//   name: string;
//   id: string;
//   destination: string;
//   from: string;
//   to: string;
//   status: string;
// }
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
    private router: Router
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
        status: new FormControl(data?.status),
        destination: new FormControl(data?.destination),
        sender: new FormControl(data?.sender),
        receiver: new FormControl(data?.receiver),
        weight: new FormControl(data?.weight),
        price: new FormControl(data?.price),
      });
    });
    this.updateParcelForm.get('weight')?.valueChanges.subscribe((res) => {
      this.updateParcelForm.get('price')!.setValue('$ ' + res * 19);
    });
  }

  onSubmit() {
    // send the inputs data to database
    this.store.dispatch(
      Actions.ADD_PARCEL({ newParcel: this.updateParcelForm.value })
    );
    this.store.dispatch(Actions.LOAD_PARCELS());
    this.router.navigate(['admin/dashboard/parcels']);
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
