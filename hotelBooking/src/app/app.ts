import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../shared/components/footer/footer';
import { Navbar } from '../shared/components/navbar/navbar';
import { Authservice } from '../core/services/authservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor() {
    inject(Authservice).checksession();  // restores login state on every page refresh
  }
}