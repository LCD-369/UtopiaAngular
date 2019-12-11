import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Airport } from '../models/Airport';
import { Booking } from '../models/Booking';
import { Flight } from '../models/Flight';
import { AirportService } from '../services/airport.service';
import { FlightService } from '../services/flight.service';
import { TicketService } from '../services/ticket.service';
import { UserService } from '../services/user.service';
import { Ticket } from '../models/Ticket';
import { NgbdDatepickerPopupComponent } from '../ngbd-datepicker-popup/ngbd-datepicker-popup.component';
// import { BookingSearchResultComponent } from '../booking-search-result/booking-search-result.component';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css'],
  providers: [NgbModalConfig, NgbModal ]
})
export class BookingformComponent implements OnInit {
  @ViewChild('departureDate', {static: true})
  departureDatePicker: NgbdDatepickerPopupComponent;

  @ViewChild('arrivalDate', {static: true})
  arrivalDatePicker: NgbdDatepickerPopupComponent;

  // @ViewChild('bookingresultComponent', {static: true})
  // bookingResultComponent: BookingSearchResultComponent;

  // @ContentChild(myPredicate, {static: true})
  // bookingResultComponent2: BookingSearchResultComponent;

  placeholderMessage = "Please select the search icon";
  faSearch = faSearch; faCalendarAlt = faCalendarAlt; faArrowCircleDown = faArrowCircleDown;
  bookingForm: Booking;
  // userForm: Login;
  selectedToAirport: Airport; selectedFromAirport: Airport; selectedTicket: Ticket; activeUser: any;
  airports: Array<Airport>; temp: Array<Airport>; ticketResult: Array<Ticket>;
  flightQuery: Flight; flightResult: Flight;
  initialForm: boolean; showSearchResult: boolean; showTable: boolean; showBooking: boolean;
  showUserInfo: boolean; bookingCard: boolean; successfullReservation: boolean; unsuccessfullReservation: boolean;
  findUser: boolean;
  isLoading: boolean; hideElements: boolean;
  searchAirportBy: any;
  regions: any; states: any; regionSelect: any; stateSelect: any;
  userForm: FormGroup;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private modalService2: NgbModal, private airportService: AirportService,
    private flightService: FlightService, private ticketService: TicketService, private userService: UserService, private fb: FormBuilder) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.centered = true;
  }

  ngOnInit() {
    this.bookingForm = new Booking();
    this.activeUser = new Object();
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // this.userForm = new Login();
    this.airports = [];
    this.temp = [];
    this.initialForm = false; this.showTable = false; this.showBooking = false;
    this.showUserInfo = false; this.showSearchResult = true; this.bookingCard = false;
    this.successfullReservation = false; this.unsuccessfullReservation = false;
    this.findUser = false;
    this.isLoading = false;
    this.hideElements = false;
    this.regions = ['United States', 'United Kindom', 'Europe'];
    this.states = ['CA', 'CO', 'GA', 'MA', 'MN', 'NY', 'TX', 'VA'];
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

  getPlaceholder1() {if(this.bookingForm.departureAirport == null) {return this.placeholderMessage;} else {return this.bookingForm.departureAirport.name;}}

  getPlaceholder2() {if(this.bookingForm.destination == null) {return this.placeholderMessage;} else {return this.bookingForm.destination.name;}}

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

  selectFromAirport(airport: any) {
    this.bookingForm.departureAirport = airport;
    this.searchAirportBy = {
      state: null,
      country: null,
    };
    this.stateSelect = null;
    this.regionSelect = null;
    this.temp = [];
    this.closeFrom();
  }

  selectToAirport(airport) {
    this.bookingForm.destination = airport;
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
    this.activeSpinner();
    let ddate = this.departureDatePicker.model.year+'-'+this.departureDatePicker.model.month+'-'+this.departureDatePicker.model.day;
    let adate = this.arrivalDatePicker.model.year+'-'+this.arrivalDatePicker.model.month+'-'+this.arrivalDatePicker.model.day;
    this.bookingForm.departureDate = ddate;
    this.bookingForm.arrivalDate = adate;
    this.initialForm = true;
    this.showAllBookings();
  }

  showAllBookings(){
    this.showBooking = true;
    this.passFlight();
  }

  passFlight() {
    this.flightService.findFlight(this.bookingForm).subscribe((flight: Flight) => {
        this.showAvailability(flight.id)
      });
  }

  showAvailability(id) {
    this.ticketService.getAvailableTickets(id).subscribe(tickets => {
      this.ticketResult = tickets;
    });
    this.inactiveSpinner();
  }

  selectTicket(ticket){
    this.showBooking = false;
    this.selectedTicket = ticket;
    this.showUserInfo = true;
  }

  onSearchUser() {
    this.activeSpinner();
    this.userService.findUser(this.userForm).subscribe(user => {
      this.activeUser = user;
      if (this.activeUser == null){
        this.inactiveSpinner();
        this.findUser = true;
      } else {
        this.findUser = false;
        this.showUserInfo = false;
        this.bookingCard = true;
        this.inactiveSpinner();
      }
    }, error => {
      console.log(error);
      this.inactiveSpinner();
      this.findUser = true;
    })

  }

  onBookFlight() {
    this.activeSpinner();
    this.ticketService.reserveFlight(this.selectedTicket, this.activeUser).subscribe(response => {
      console.log(response);
      this.successfullReservation = true;
      this.inactiveSpinner();
    }, error => {
      console.log(error);
      this.inactiveSpinner();
      this.unsuccessfullReservation = true;
    })
  }

  restartBooking() {
    this.ngOnInit();
  }

  activeSpinner() {
    this.isLoading = true;
    this.hideElements = true;
  }

  inactiveSpinner() {
    this.isLoading = false;
    this.hideElements = false;
  }

}
