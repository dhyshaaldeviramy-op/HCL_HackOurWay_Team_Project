import { Component, inject, NgModule } from '@angular/core';
import { PaymentDTO } from '../../../models/paymentdto';
import { PaymentService } from '../../../core/services/payment';
import { FormsModule, NgModel } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-payment',
  imports: [FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class PaymentComponent {
   payment: PaymentDTO = {
    bookingId: 0,
    amount: 0
  };

  fetchedPayment?: PaymentDTO;
  message = '';

 private paymentservice = inject(PaymentService);

 submitPayment() {
    this.paymentservice.sendPayment(this.payment).subscribe({
      next: (res:any) => {
        this.message = 'Payment Successful ';
        this.payment = { bookingId: 0, amount: 0 };
      },
      error: () => {
        this.message = 'Payment Failed ';
      }
    });
  }

  
  getPayment() {
    this.paymentservice.getPaymentById(this.payment.bookingId).subscribe({
      next: (res:any) => {
        this.fetchedPayment = res;
      },
      error: () => {
        this.message = 'Payment not found ';
      }
    });
  }
}
