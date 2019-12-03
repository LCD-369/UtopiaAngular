import { Flight } from './Flight';
import { User } from './User';

export class Ticket {
  flight: Flight;
  row: number;
  seat: string;
  seatClass: string;
  reserver: User;
  price: number;
  reservationTimeout: Date;
  bookingId: string;
}
