import { createFeatureSelector, createReducer, createSelector } from "@ngrx/store";
import { on } from "@ngrx/store";
import * as Actions from '../state/parcel.actions'
import { Iparcel } from "../models/parcel.model";

export interface IParcelState{
  parcels: Iparcel[]
  parcelsError: string
  parcelId: number |string
  error: string
  delete_message: string
  add_message: string
}

const initialState: IParcelState = {
  parcels: [],
  parcelsError: '',
  parcelId: 0,
  error: '',
  delete_message: '',
  add_message: '',
}

export const getParcelsFeaturesState = createFeatureSelector<IParcelState>('parcel')

export const getParcels = createSelector(
  getParcelsFeaturesState, (state)=> state.parcels
)
export const getParcelId = createSelector(
  getParcelsFeaturesState,
  (state)=>state.parcelId
)
export const getParcel = createSelector(
  getParcelsFeaturesState,
  getParcelId,
  (state,id)=> state.parcels.find(parcel => parcel.id === id)
)
export const ParcelReducer = createReducer(
  initialState,

  on(Actions.LOAD_PARCELS_SUCCESS, (state, action): IParcelState => {
    return { ...state, parcels: action.parcels};
  }),

  on(Actions.LOAD_PARCELS_FAIL, (state, action): IParcelState => {
    return { ...state, error: action.error_message };
  }),

  // post order/reducers
  on(Actions.SELECTED_PARCEL_ID, (state, action): IParcelState => {
    return { ...state, parcelId: action.id };
  }),
  on(Actions.ADD_PARCEL_SUCCESS, (state, action): IParcelState => {
    return { ...state, add_message: action.success_message};
  }),
  on(Actions.ADD_PARCEL_FAIL, (state, action): IParcelState => {
    return { ...state, error: action.error_message };
  }),

  //Delete parcels
  on(Actions.DELETE_PARCELS_SUCCESS, (state, action): IParcelState => {
    return { ...state, delete_message: action.success_message };
  }),

  on(Actions.DELETE_PARCELS_FAIL, (state, action): IParcelState => {
    return { ...state, error: action.error_message };
  })
);

