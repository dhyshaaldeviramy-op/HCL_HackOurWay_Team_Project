import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../app/Environment/environment';
@Injectable({
  providedIn: 'root',
})
export class BookingService {
   

  constructor(private http: HttpClient) {}

  // Create booking
  createBooking(data: any) {
    return this.http.post(`${environment.apiUrl}/Booking`, data);
  }

  // Get bookings by user
  getUserBookings(userId: number) {
    return this.http.get(`${environment.apiUrl}/Booking/user/${userId}`);
  }

  // Cancel booking
  cancelBooking(id: number) {
    return this.http.put(`${environment.apiUrl}/Booking/cancel/${id}`, {});
  }
}
