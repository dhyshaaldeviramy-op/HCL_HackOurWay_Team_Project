import { Component, OnInit, signal } from '@angular/core';
import { HotelService } from '../../../core/services/hotel-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-list',
  imports: [CommonModule],
  templateUrl: './hotel-list.html',
  styleUrl: './hotel-list.css',
})
export class HotelList implements OnInit {
  hotels = signal<any[]>([]);   // ← changed to signal

  constructor(
    private hotelService: HotelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getHotels().subscribe({
      next: (res: any) => {
        this.hotels.set(res);   // ← use .set()
        console.log('hotels:', res);
      },
      error: (err) => console.error('Error:', err)
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/hotels', id]);
  }
}