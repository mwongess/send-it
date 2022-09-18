import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnlessDirective } from './Directives/unless.directive';
import { RemovebgDirective } from './Directives/removebg.directive';
import { FilterPipe } from './Pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ShortenPipe } from './Pipes/shorten.pipe';
import { AlertComponent } from './components/alert/alert.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PlaceholderDirective } from './Directives/placeholder.directive';

@NgModule({
  declarations: [
    UnlessDirective,
    RemovebgDirective,
    FilterPipe,
    ShortenPipe,
    NavigationBarComponent,
    AlertComponent,
    PlaceholderDirective,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [
    UnlessDirective,
    RemovebgDirective,
    PlaceholderDirective,
    FilterPipe,
    ShortenPipe,
    FormsModule,
    NavigationBarComponent,
    AlertComponent,
  ],
  providers: [AuthGuard, AuthService],
})
export class SharedModule {}
