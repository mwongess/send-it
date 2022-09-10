import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {RouterModule, Routes } from '@angular/router';
import { ParcelsComponent } from './parcels/parcels.component';
import { ParcelDetailsComponent } from './parcel-details/parcel-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { ParcelReducer } from '../shared/state/parcel.reducer';
import { ParcelEffectsService } from '../shared/state/parcel-effects.service';
import { EffectsModule } from '@ngrx/effects';

const userRoutes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      {
      path: 'parcels', component: ParcelsComponent
    },
      
      {
        path: 'parcel/details', component: ParcelDetailsComponent
      }
    ]
  },
  {
    path:'parcels/parcel/details', redirectTo: 'parcel/details'
  }
]

@NgModule({
  declarations: [UserComponent, ParcelsComponent, ParcelDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule,
      StoreModule.forFeature(
     ' parcel', ParcelReducer
      ),
      EffectsModule.forFeature([ParcelEffectsService]),
    SharedModule
  ],
})
export class UserModule {}
