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

const adminRoutes: Routes = [
  {
    path: 'admin/dashboard',
    component: AdminComponent,

    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'parcels',
        component: ParcelsComponent
      },
      {
        path: 'parcels/new',
        component: NewParcelComponent
      },
      {
        path: 'pickups',
        component: PickupsComponent
      }
    ],
  },
];
@NgModule({
  declarations: [AdminComponent,DashboardComponent,NavigationBarComponent, PickupsComponent, ParcelsComponent, NewParcelComponent],
  imports: [CommonModule,RouterModule.forChild(adminRoutes),SharedModule],
  // exports: [DashboardComponent],
})
export class AdminModule {}
