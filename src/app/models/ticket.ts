import { Flight } from './Flight';
import { User } from './User';

export class Ticket {
  ticketId: number;
  flight: Flight;
  seatRow: number;
  seat: string;
  seatClass: string;
  price: number;
  reserver: User;
  reservationTimeout: Date;
  bookingId: string;
}
