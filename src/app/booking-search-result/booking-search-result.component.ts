import { Component, OnInit, Input} from '@angular/core';
import { Airport } from '../models/Airport';
import { Booking } from '../models/Booking';
import { Flight } from '../models/Flight';
import { Ticket } from '../models/Ticket';
import { FlightService } from '../services/flight.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-booking-search-result',
  templateUrl: './booking-search-result.component.html',
  styleUrls: ['./booking-search-result.component.css']
})
export class BookingSearchResultComponent implements OnInit {
  @Input() flightQuery: Booking;

  showBookingTable: boolean;
  flightResult: Flight;
  ticketResult: Array<Ticket>;



  constructor(private flightService: FlightService, private ticketService: TicketService) { }

  ngOnInit() {
    this.showBookingTable = false;
  }

  ShowFlightResult(){
    this.flightService.findFlight(this.flightQuery).subscribe((flight: Flight) => {
        this.flightResult = flight;
      });

  }

  ShowAvailability(flightNumber) {
      console.log(this.flightResult.id);
    this.ticketService.getAvailableTickets(flightNumber).subscribe(tickets => {
      this.ticketResult = tickets;
    });
    this.showBookingTable = true;
  }

  selectFlight() {
    this.ShowAvailability(this.flightResult.id);
  }

  selectTicket(ticket){

  }

}
