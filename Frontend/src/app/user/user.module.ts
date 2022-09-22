import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {RouterModule, Routes } from '@angular/router';
import { ParcelsComponent } from './parcels/parcels.component';
import { ParcelDetailsComponent } from './more-details/parcel-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { ParcelReducer } from '../shared/state/parcel.reducer';
import { ParcelEffectsService } from '../shared/state/parcel-effects.service';
import { EffectsModule } from '@ngrx/effects';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GoogleMapsModule } from '@angular/google-maps';

import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: IntroSectionComponent,
      },
      {
        path: 'parcels',
        component: ParcelsComponent,
      },

      {
        path: 'parcel/details/:id',
        component: ParcelDetailsComponent,
      },
      {
        path: 'parcels/parcel/details/:id',
        redirectTo: 'parcel/details/:id',
        pathMatch: 'full'
      },
    ],
  },
  {
    path: 'parcels/parcel/details',
    redirectTo: 'parcel/details/:id',
  },
];

@NgModule({
  declarations: [
    UserComponent,
    ParcelsComponent,
    ParcelDetailsComponent,
    NavbarComponent,
    IntroSectionComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    GooglePlaceModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule,
    StoreModule.forFeature(' parcel', ParcelReducer),
    EffectsModule.forFeature([ParcelEffectsService]),
    SharedModule,
    NgxPaginationModule,
  ],
})
export class UserModule {}
