import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { PickupsComponent } from './pickups/pickups.component';
import { ParcelsComponent } from './parcels/parcels.component';
import { NewParcelComponent } from './new-parcel/new-parcel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParcelDetailsComponent } from './update-details/parcel-details.component';
import { OrdersComponent } from './orders/orders.component';
import { ParcelEffectsService } from '../shared/state/parcel-effects.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ParcelReducer } from '../shared/state/parcel.reducer';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxPaginationModule } from 'ngx-pagination';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'parcels',
        component: OrdersComponent,
      },
      {
        path: 'parcel/details/:id',
        component: MoreDetailsComponent,
      },
      {
        path: 'parcel/details/:id/update',
        component:ParcelDetailsComponent
      },
      {
        path: 'parcels/parcel/details/:id',
        redirectTo: 'parcel/details/:id',
        pathMatch: 'full',
      },
      {
        path: 'parcels/new',
        component: NewParcelComponent,
      },
      {
        path: 'parcels/parcels/new',
        redirectTo: 'parcels/new',
      },
      {
        path: 'pickups',
        component: PickupsComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PickupsComponent,
    ParcelsComponent,
    NewParcelComponent,
    ParcelDetailsComponent,
    OrdersComponent,
    MoreDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(adminRoutes),
    ReactiveFormsModule,
    StoreModule.forFeature(
      'parcel', ParcelReducer
    ),
    EffectsModule.forFeature([ParcelEffectsService]),GoogleMapsModule,NgxPaginationModule
  ],
})
export class AdminModule {}
