import { Airport } from './Airport';

export class Flight {
  id: number;
  departureAirport: Airport;
  destination: Airport;
  departureDate: Date;
  arrivalDate: Date;
  flightNumber: number;
}
