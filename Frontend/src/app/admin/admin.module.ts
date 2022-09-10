import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from '../shared/navigation-bar/navigation-bar.component';
import { PickupsComponent } from './pickups/pickups.component';
import { ParcelsComponent } from './parcels/parcels.component';
import { NewParcelComponent } from './new-parcel/new-parcel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParcelDetailsComponent } from './parcel-details/parcel-details.component';
import { OrdersComponent } from './orders/orders.component';
import { ParcelEffectsService } from '../shared/state/parcel-effects.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ParcelReducer } from '../shared/state/parcel.reducer';
import { AuthGuard } from '../shared/services/auth-guard.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
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
        path: 'parcel/details',
        component: ParcelDetailsComponent,
      },
      {
        path: 'parcels/parcel/details',
        redirectTo: 'parcel/details',
        pathMatch: 'full',
      },
      {
        path: 'parcels/new',
        component: NewParcelComponent,
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
    NavigationBarComponent,
    PickupsComponent,
    ParcelsComponent,
    NewParcelComponent,
    ParcelDetailsComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      'parcel', ParcelReducer
    ),
    EffectsModule.forFeature([ParcelEffectsService]),
  ],
})
export class AdminModule {}
