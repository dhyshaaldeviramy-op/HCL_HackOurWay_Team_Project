import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../core/services/booking-service';
import { RoomService } from '../../../core/services/room-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-page',
  imports: [FormsModule,CommonModule],
  templateUrl: './booking-page.html',
  styleUrl: './booking-page.css',
})
export class BookingPage {

  roomId!: number;
  room: any;

  checkIn!: string;
  checkOut!: string;
  totalPrice: number = 0;

  userId: number = 1; // 🔥 TEMP (replace later with logged user)

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.roomId = Number(this.route.snapshot.queryParamMap.get('roomId'));
    this.loadRoom();
  }

  loadRoom() {
    this.roomService.getRoomsByHotel(0) // fallback not needed, just for safety
    this.roomService.getRoomsByHotel(this.roomId).subscribe((res: any) => {
      // If your API doesn't support single room, ignore this part
      this.room = res[0];
    });
  }

  calculatePrice() {
    if (this.checkIn && this.checkOut && this.room) {
      const start = new Date(this.checkIn);
      const end = new Date(this.checkOut);

      const days = Math.ceil(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );

      this.totalPrice = days * this.room.price;
    }
  }

  bookNow() {
    const data = {
      userId: this.userId,
      roomId: this.roomId,
      checkIn: this.checkIn,
      checkOut: this.checkOut,
      totalPrice: this.totalPrice
    };

    this.bookingService.createBooking(data).subscribe(() => {
      alert('Booking Successful!');
    });
  }
}
