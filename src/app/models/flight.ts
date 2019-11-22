import { Airport } from './Airport';

export class Flight {
  id: number;
  departureAirport: Airport;
  destination: Airport;
  departureDate: any;
  arrivalDate: any;
  flightNumber: number;
}
