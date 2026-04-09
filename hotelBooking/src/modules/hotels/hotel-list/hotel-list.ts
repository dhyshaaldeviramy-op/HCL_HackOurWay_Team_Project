import { Component } from '@angular/core';
import { HotelService } from '../../../core/services/hotel-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './hotel-list.html',
  styleUrl: './hotel-list.css',
})
export class HotelList {
hotels: any[] = [];

  constructor(
    private hotelService: HotelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getHotels().subscribe((res: any) => {
      this.hotels = res;
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/hotels', id]);
  }
}
