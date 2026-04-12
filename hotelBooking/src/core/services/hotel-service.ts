import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../app/Environment/environment';

@Injectable({
  providedIn: 'root',
})
export class HotelService {

  constructor(private http: HttpClient) {}

  getHotels() {
    return this.http.get(`${environment.apiUrl}/Hotel`);
  }

  getHotelById(id: number) {
    return this.http.get(`${environment.apiUrl}/Hotel/${id}`);
  }

  addHotel(data: any) {
    return this.http.post(`${environment.apiUrl}/Hotel`, data, { responseType: 'text' }); // ← FIXED
  }
}