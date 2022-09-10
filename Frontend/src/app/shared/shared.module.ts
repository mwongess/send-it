import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { UnlessDirective } from './Directives/unless.directive';
import { RemovebgDirective } from './Directives/removebg.directive';
import { FilterPipe } from './Pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
// import { ParcelReducer } from './state/parcel.reducer';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [UnlessDirective, RemovebgDirective, FilterPipe],
  imports: [CommonModule,FormsModule,HttpClientModule],
  exports: [UnlessDirective, RemovebgDirective, FilterPipe,FormsModule],
  providers: [AuthGuard,AuthService]
})
export class SharedModule {}
