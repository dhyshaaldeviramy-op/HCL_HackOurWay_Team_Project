import { BookingPage } from './../modules/booking/booking-page/booking-page';
import { Login } from './../modules/auth/login/login';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Register } from '../modules/auth/register/register';
import { HotelList } from '../modules/hotels/hotel-list/hotel-list';
import { HotelDetails } from '../modules/hotels/hotel-details/hotel-details';
import { MyBookings } from '../modules/booking/my-bookings/my-bookings';
import { PaymentComponent } from '../modules/payment/payment/payment';
import { authGuardGuard } from '../core/guards/auth-guard-guard';

const routes: Routes = [

  // Default route
  { path: '', component: HotelList },

  // Auth
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // Hotels
  { path: 'hotels', component: HotelList },
  { path: 'hotels/:id', component: HotelDetails },

  // Booking
  { 
    path: 'booking', 
    component: BookingPage,
    canActivate: [authGuardGuard]   // protect route
  },

  { 
    path: 'my-bookings', 
    component: MyBookings,
    canActivate: [authGuardGuard]
  },

  // Payment
  { 
    path: 'payment', 
    component: PaymentComponent,
    canActivate: [authGuardGuard]
  },

  // Wildcard (404)
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}