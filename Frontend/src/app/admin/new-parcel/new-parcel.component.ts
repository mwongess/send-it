import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as Actions from '../../shared/state/parcel.actions'

@Component({
  selector: 'app-new-parcel',
  templateUrl: './new-parcel.component.html',
  styleUrls: ['./new-parcel.component.css'],
})
export class NewParcelComponent implements OnInit {
  newParcelForm!: FormGroup;
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.newParcelForm = new FormGroup({
      name: new FormControl(null),
      from: new FormControl(null),
      destination: new FormControl(null),
    });
  }
  onSubmit() {
    // create a partial parcel
    console.log(this.newParcelForm.value);

    this.store.dispatch(
      Actions.ADD_PARCEL({newParcel: this.newParcelForm.value })
    );
    this.store.dispatch(Actions.LOAD_PARCELS());
    this.router.navigate(['admin/dashboard/parcels']);
    console.log(this.newParcelForm);
  }
}
