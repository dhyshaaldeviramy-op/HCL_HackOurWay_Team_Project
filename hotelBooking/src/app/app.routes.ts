import { Routes } from '@angular/router';

import { Login } from './../modules/auth/login/login';
import { Register } from '../modules/auth/register/register';

import { HotelList } from '../modules/hotels/hotel-list/hotel-list';
import { HotelDetails } from '../modules/hotels/hotel-details/hotel-details';

import { BookingPage } from './../modules/booking/booking-page/booking-page';
import { MyBookings } from '../modules/booking/my-bookings/my-bookings';

import { PaymentComponent } from '../modules/payment/payment/payment';

import { AdminDashboard } from '../modules/admin/admin-dashboard/admin-dashboard';

import { authGuardGuard } from '../core/guards/auth-guard-guard';
import { adminGuard } from '../core/guards/admin-guard-guard';

export const routes: Routes = [

  // Default route
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Auth
  { path: 'login',    component: Login },
  { path: 'register', component: Register },

  // Hotels
  { path: 'hotels',     component: HotelList },
  { path: 'hotels/:id', component: HotelDetails },

  // Booking
  { path: 'booking',     component: BookingPage, canActivate: [authGuardGuard] },
  { path: 'my-bookings', component: MyBookings,  canActivate: [authGuardGuard] },

  // Payment
  { path: 'payment', component: PaymentComponent, canActivate: [authGuardGuard] },

  // Admin
  { path: 'admin/dashboard', component: AdminDashboard, canActivate: [adminGuard] },

  // Wildcard (404)
  { path: '**', redirectTo: '' }

];