import { createAction, props } from '@ngrx/store';
import { Iparcel } from '../models/parcel.model';

// ++++++++++++++++ ID ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const SELECTED_PARCEL_ID = createAction(
  'SELECTED_PARCEL_ORDER',
  props<{ id: number | string }>()
);

// +++++++++++++ Create new parcel order ++++++++++++++++++++++++++++++++++++++++++++++++
export const ADD_PARCEL = createAction(
  'ADD_PARCEL',
  props<{ newParcel: Iparcel }>()
);

export const ADD_PARCEL_SUCCESS = createAction(
  ' ADD_PARCEL_SUCCESS',
  props<{ success_message: string }>()
);

export const ADD_PARCEL_FAIL = createAction(
  'ADD_PARCEL_FAIL',
  props<{ error_message: string }>()
);

//++++++++++++++  Load all parcel orders +++++++++++++++++++++++++++++++++++
export const LOAD_PARCELS = createAction('LOAD_PARCELS');

export const LOAD_PARCELS_SUCCESS = createAction(
  'LOAD_PARCELS_SUCCESS',
  props<{ parcels: Iparcel[] }>()
);

export const LOAD_PARCELS_FAIL = createAction(
  'LOAD_PARCELS_FAIL',
  props<{ error_message: string }>()
);

//++++++++++++++++  Delete parcels with id+++++++++++++++++++++++++
export const DELETE_PARCEL = createAction(
  'DELETE_PARCEL',
  props<{ id: number | string }>()
);

export const DELETE_PARCELS_SUCCESS = createAction(
  'DELETE_PARCEL_SUCCESS',
  props<{ success_message: string }>()
);

export const DELETE_PARCELS_FAIL = createAction(
  'DELETE_PARCEL_FAIL',
  props<{ error_message: string }>()
);

export const UPDATE_PARCEL = createAction(
  'UPDATE_PARCEL',
  props<{ id: number|string; updatedParcel: Iparcel }>()
);
export const UPDATE_PARCEL_FAIL = createAction(
  'UPDATE_PARCEL_FAIL',
  props<{ error_message: string }>()
);
export const UPDATE_PARCEL_SUCCESS = createAction(
  'UPDATE_PARCEL_SUCCESS',
  props<{ success_message: string }>()
);
// +++++++++
