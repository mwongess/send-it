import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule,FormsModule ,RouterModule.forChild(authRoutes)],
})
export class AuthModule {}
