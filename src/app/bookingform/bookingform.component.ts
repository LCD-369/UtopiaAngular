import { Component, OnInit, ViewChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
// import { FormGroup, FormControl } from '@angular/forms';
import { NgbModalConfig, NgbModal, NgbDate,  NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Airport } from '../models/Airport';
import { Booking } from '../models/Booking';
import { AirportService } from '../services/airport.service';
// import { NgbdDatepickerPopupComponent } from '../ngbd-datepicker-popup/ngbd-datepicker-popup.component';


@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class BookingformComponent implements OnInit {
  // @ViewChild('dp', {static: true})
  // departureDatePicker: NgbdDatepickerPopupComponent;

  // @ViewChild('arrivalDate', {static: true})
  // arrivalDatePicker: NgbdDatepickerPopupComponent;
  placeholderMessage = "Please select the search icon";
  faSearch = faSearch;
  faCalendarAlt = faCalendarAlt;
  bookingForm: Booking;
  selectedFromAirport: Airport;
  selectedToAirport: Airport;
  airports: Array<Airport>;
  temp: Array<Airport>;
  showTable: boolean;
  searchAirportBy: any;
  regions: any;
  states: any;
  regionSelect: any;
  stateSelect: any;
  startDate: any;
  model: any;


  constructor(config: NgbModalConfig, private modalService: NgbModal, private modalService2: NgbModal, private airportService: AirportService) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.centered = true;
  }

  ngOnInit() {
    // this.model = new NgbDate(2020, 1, 1);
    this.bookingForm = new Booking();
    // this.bookingForm.departureAPDate = {year: 2020, month: 1, day: 1};
    // this.bookingForm.arrivalAPDate = {year: 2020, month: 1, day: 1};
    this.airports = [];
    this.temp = [];
    this.showTable = false;
    this.regions = ['United States', 'United Kindom', 'Europe'];
    this.states = ['CA', 'CO', 'MA', 'NY', 'TX', 'VA'];
    this.searchAirportBy = {
      state: null,
      country: null
    };
    this.airportService.getAirport().subscribe(airports => {this.airports = airports;});
  }

  openFrom(contentFrom) {this.modalService.open(contentFrom);}

  openTo(contentTo) {this.modalService2.open(contentTo);}

  closeFrom() {this.modalService.dismissAll();}

  closeTo() {this.modalService2.dismissAll();}

  getPlaceholder1() {if(this.bookingForm.departureAP == null) {return this.placeholderMessage;} else {return this.bookingForm.departureAP;}}

  getPlaceholder2() {if(this.bookingForm.arrivalAP == null) {return this.placeholderMessage;} else {return this.bookingForm.arrivalAP;}}

  showAirportTable() {
    if(this.regionSelect !== null && this.stateSelect !== null) {
        this.airports.forEach((current) => {
          if(this.searchAirportBy.country === current.country &&
          this.searchAirportBy.state === current.state) {
            this.temp.push(current);
          }
        });
      this.showTable = true;
    }
  }

  selectRegion(region: string) {
    this.searchAirportBy.country = region;
    this.regionSelect = region;
  }

  selectState(state: string) {
    this.searchAirportBy.state = state;
    this.stateSelect = state;
    this.showAirportTable();
  }

  selectFromAirport(airport: Airport) {
    this.bookingForm.departureAP = airport.name;
    this.searchAirportBy = {
      state: null,
      country: null,
    };
    this.stateSelect = null;
    this.regionSelect = null;
    this.temp = [];
    this.closeFrom();
  }

  selectToAirport(airport: Airport) {
    this.bookingForm.arrivalAP = airport.name;
    this.searchAirportBy = {
      state: null,
      country: null,
    };
    this.stateSelect = null;
    this.regionSelect = null;
    this.temp = [];
    this.closeTo();
  }

  onSubmit() {

    console.log(this.bookingForm.departureAPDate);
    console.log(this.model);
    console.log(this.bookingForm);
  }

}
