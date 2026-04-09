import { Component } from '@angular/core';
import { BookingService } from '../../../core/services/booking-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-bookings',
  imports: [FormsModule,CommonModule],
  templateUrl: './my-bookings.html',
  styleUrl: './my-bookings.css',
})
export class MyBookings {

  bookings: any[] = [];
  userId: number = 1; // 🔥 TEMP (replace with logged-in user later)

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings() {
    this.bookingService.getUserBookings(this.userId)
      .subscribe((res: any) => {
        this.bookings = res;
      });
  }

  cancelBooking(id: number) {
    if (confirm('Are you sure you want to cancel this booking?')) {
      this.bookingService.cancelBooking(id)
        .subscribe(() => {
          alert('Booking cancelled');
          this.loadBookings(); // refresh
        });
    }
  }
}
