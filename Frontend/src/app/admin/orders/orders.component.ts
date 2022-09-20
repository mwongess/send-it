import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as Actions from '../../shared/state/parcel.actions';
import { Store } from '@ngrx/store';
import { getParcels } from 'src/app/shared/state/parcel.reducer';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  state,
  keyframes,
} from '@angular/animations';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        // each time the binding value changes
        query(
          ':leave',
          [stagger(100, [animate('0.5s', style({ opacity: 0 }))])],
          { optional: true }
        ),
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(100, [animate('0.5s', style({ opacity: 1 }))]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '500ms',
          style({
            transform: 'translateX(0)',
            opacity: 1,
            'overflow-x': 'hidden',
          })
        ),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 })),
      ]),
    ]),
    trigger('slideIn', [
      state('*', style({ 'overflow-y': 'hidden' })),
      state('void', style({ 'overflow-y': 'hidden' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 })),
      ]),
      transition('void => *', [
        style({ height: '0' }),
        animate(250, style({ height: '*' })),
      ]),
    ]),
  ],
})
export class OrdersComponent implements OnInit {
  p: number = 1;
  parcels: any;
  parcels$ = this.store.select(getParcels);
  filterString: string = '';
  constructor(
    private router: Router,
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
