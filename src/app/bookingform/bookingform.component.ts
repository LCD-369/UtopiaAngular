import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Airport} from '../models/Airport';
import { AirportService } from '../services/airport.service';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css'],
   providers: [NgbModalConfig, NgbModal]
})
export class BookingformComponent implements OnInit {
  faSearch = faSearch;
  selectedFromAirport: Airport;
  selectedToAirport: Airport;
  searchAirport: Airport;
  airports: Array<Airport>;
  temp: Array<Airport>;
  regionField: boolean;
  stateField: boolean;
  showTable: boolean;
  regions;
  states;
  regionSelect;
  stateSelect;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private modalService2: NgbModal, private airportService: AirportService) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.centered = true;
  }

  openFrom(contentFrom) {
    this.modalService.open(contentFrom);
  }
  
  openTo(contentTo) {
    this.modalService2.open(contentTo);
  }

  closeFrom() {
    this.modalService.dismissAll();
  }

  closeTo() {
    this.modalService2.dismissAll();
  }

  ngOnInit() {
    this.airports = [];
    this.temp = [];
    this.regionField = false;
    this.stateField = false;
    this.showTable = false;
    this.regions = ['United States', 'United Kindom', 'Europe'];
    this.states = ['CA', 'CO', 'MA', 'NY', 'TX', 'VA'];
    this.searchAirport = {
      code: null,
      name: null,
      city: null,
      state: null,
      country: null,
    };
    this.selectedFromAirport = {
      code: null,
      name: null,
      city: null,
      state: null,
      country: null,
    };
    this.selectedToAirport = {
      code: null,
      name: null,
      city: null,
      state: null,
      country: null,
    };
    this.airportService.getAirport().subscribe(airports => {
      this.airports = airports;
      });
  }

  showAirportTable() {
    if(this.regionField == true && this.stateField == true) {
        this.airports.forEach((current) => {
          if(this.searchAirport.country === current.country &&
          this.searchAirport.state === current.state) {
            this.temp.push(current);
          }
        });
      this.showTable = true;
    }
  }

  selectRegion(region: string) {
    this.regionField = true;
    this.searchAirport.country = region;
    this.regionSelect = region;
  }

  selectState(state: string) {
    this.stateField = true;
    this.searchAirport.state = state;
    this.stateSelect = state;
    this.showAirportTable();
  }

  selectFromAirport(airport: Airport) {
    this.selectedFromAirport = airport;

    this.stateField = false;
    this.regionField = false;
    this.searchAirport = {
      code: null,
      name: null,
      city: null,
      state: null,
      country: null,
    };
    this.stateSelect = '';
    this.regionSelect = '';
    this.temp = [];
    this.closeFrom();
  }

  selectToAirport(airport: Airport) {
    this.selectedToAirport = airport;
    this.stateField = false;
    this.regionField = false;
    this.searchAirport = {
      code: null,
      name: null,
      city: null,
      state: null,
      country: null,
    };
    this.stateSelect = '';
    this.regionSelect = '';
    this.temp = [];
    this.closeTo();
  }

}
