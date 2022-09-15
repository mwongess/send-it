import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as Actions from '../../shared/state/parcel.actions';
import { Store } from '@ngrx/store';
import { ParcelsService } from 'src/app/shared/services/parcels.service';
import { getParcels } from 'src/app/shared/state/parcel.reducer';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  animations: [
    trigger('tr1', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(300),
      ]),
      transition('* => void', [
        animate(
          300,
          style({
            transform: 'translateX(100px)',
            opacity: 0,
          })
        ),
      ]),
    ]),
    trigger('tr2', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        animate(
          1000,
          keyframes([
            style({
              transform: 'translateX(-100px)',
              opacity: 0,
              offset: 0,
            }),
            style({
              transform: 'translateX(-50px)',
              opacity: 0.5,
              offset: 0.3,
            }),
            style({
              transform: 'translateX(-20px)',
              opacity: 1,
              offset: 0.8,
            }),
            style({
              transform: 'translateX(0px)',
              opacity: 1,
              offset: 1,
            }),
          ])
        ),
      ]),
      transition('* => void', [
        group([
          animate(
            300,
            style({
              color: 'red',
            })
          ),
          animate(
            800,
            style({
              transform: 'translateX(100px)',
              opacity: 0,
            })
          ),
        ]),
      ]),
    ]),
  ],
})
export class OrdersComponent implements OnInit {
  state = 'normal';
  wildState = 'normal';
  parcels: any;
  parcels$ = this.store.select(getParcels);
  filterString: string = '';
  constructor(
    private router: Router,
    private parcel: ParcelsService,
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(Actions.LOAD_PARCELS());
    this.parcels$.subscribe((data) => {
      this.parcels = data;
    });
  }

  trOnclick(id: string | number) {
    this.router.navigate([`/admin/dashboard/parcel/details/${id}`], {
      relativeTo: this.route,
    });
  }
}
