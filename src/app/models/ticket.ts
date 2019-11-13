import { Injectable } from '@angular/core';

@Injectable()
export class Ticket {
  ticketId: number;
  flight: any;
  seatRow: number;
  seat: string;
  seatClass: string;
  price: number;
  reserver: any;
  reservationTimeout: Date;
  bookingId: string;
}
