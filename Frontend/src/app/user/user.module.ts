import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
 { path: 'user', component: UserComponent}
]

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
