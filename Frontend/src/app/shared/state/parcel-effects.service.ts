import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of } from 'rxjs';
import { Iparcel } from '../models/parcel.model';
import { ParcelsService } from '../services/parcels.service';
import * as ParcelsActions from '../state/parcel.actions'
@Injectable({
  providedIn: 'root',
})
export class ParcelEffectsService {
  constructor(private actions: Actions, private parcelsService: ParcelsService) {}

  loadParcel = createEffect(() => {
    return this.actions.pipe(
      ofType(ParcelsActions.LOAD_PARCELS),
      concatMap(() =>
        // rename
        this.parcelsService.gettAllParcels().pipe(
          map((parcels) => ParcelsActions.LOAD_PARCELS_SUCCESS({parcels})),
          catchError((error) =>
            of(ParcelsActions.ADD_PARCEL_FAIL({ error_message: error.message }))
          )
        )
      )
    );
  });
  addParcel = createEffect(() => {
    return this.actions.pipe(
      ofType(ParcelsActions.ADD_PARCEL),
      mergeMap((action) =>
        this.parcelsService.newParcel(action.newParcel).pipe(
          map((res) =>
            ParcelsActions.ADD_PARCEL_SUCCESS({ success_message: res.message })
          ),
          catchError((error) =>
            of(ParcelsActions.ADD_PARCEL_FAIL({ error_message: error }))
          )
        )
      )
    );
  });

  deleteParcel = createEffect(() => {
    return this.actions.pipe(
      ofType(ParcelsActions.DELETE_PARCEL),
      mergeMap((action) =>
        this.parcelsService.deleteParcel(action.id).pipe(
          map((res: any) =>
            ParcelsActions.DELETE_PARCELS_SUCCESS({ success_message: res.message })
          ),
          catchError((error) =>
            of(ParcelsActions.DELETE_PARCELS_FAIL({ error_message: error.message }))
          )
        )
      )
    );
  });
}
