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
        component: ParcelsComponent,
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
