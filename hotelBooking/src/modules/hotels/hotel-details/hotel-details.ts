import { Component } from '@angular/core';
import { HotelService } from '../../../core/services/hotel-service';
import { RoomService } from '../../../core/services/room-service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './hotel-details.html',
  styleUrl: './hotel-details.css',
})
export class HotelDetails {

  hotelId!: number;
  hotel: any;
  rooms: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.hotelId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadHotel();
    this.loadRooms();
  }

  loadHotel() {
    this.hotelService.getHotelById(this.hotelId).subscribe((res: any) => {
      this.hotel = res;
    });
  }

  loadRooms() {
    this.roomService.getRoomsByHotel(this.hotelId).subscribe((res: any) => {
      this.rooms = res;
    });
  }
}
