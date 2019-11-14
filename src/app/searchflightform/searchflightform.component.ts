import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Flight } from '../models/Flight';
import { Airport } from '../models/Airport';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-searchflightform',
  templateUrl: './searchflightform.component.html',
  styleUrls: ['./searchflightform.component.css']
})
export class SearchflightformComponent implements OnInit {
  searchForm = new FormGroup({
  departureAP: new FormControl(''),
  arrivalAP: new FormControl(''),
  departureAPDate: new FormControl(''),
  arrivalAPDate: new FormControl(''),
  });
  collapsed = true;
  flights: Array<Flight>;
  showTable: boolean;

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flights = [];
    this.showTable = true;
    this.flightService.getFlight().subscribe(flights => {
      this.flights = flights;
      });
  }

  selectFlight() {

  }
  searchFlightTickets() {

  }
}
