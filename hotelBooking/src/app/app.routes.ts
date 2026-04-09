// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelList } from '../modules/hotels/hotel-list/hotel-list';
import { HotelDetails } from '../modules/hotels/hotel-details/hotel-details';

const routes: Routes = [
  { path: '', component: HotelList },
  { path: 'hotels/:id', component: HotelDetails }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}