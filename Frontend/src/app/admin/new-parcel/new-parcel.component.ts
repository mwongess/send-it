import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-parcel',
  templateUrl: './new-parcel.component.html',
  styleUrls: ['./new-parcel.component.css']
})
export class NewParcelComponent implements OnInit {
  newParcelForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.newParcelForm = new FormGroup({
      'name': new FormControl(null),
      'owner': new FormControl(null),
      'destination': new FormControl(null)
    })
  }
  onSubmit() {
    console.log(this.newParcelForm)
  }

}
