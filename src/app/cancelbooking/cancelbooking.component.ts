import { Component, OnInit } from '@angular/core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TicketService } from '../services/ticket.service';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { Ticket } from '../models/Ticket';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {

  faArrowCircleDown = faArrowCircleDown;
  userForm: FormGroup;
  activeUser: User;
  selectedTicket: Ticket;
  ticketResult: Array<Ticket>;
  findUser: boolean;
  showUserInfo: boolean;
  cancelingCard: boolean;
  noTicketsFound: boolean;
  successfullCancelation: boolean;
  isLoading: boolean;
  hideElements: boolean;

  constructor(private userService: UserService, private ticketService: TicketService, private fb: FormBuilder) { }

  ngOnInit() {
    this.activeUser = new User();
    this.selectedTicket = new Ticket();
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.ticketResult = [];
    this.findUser = false;
    this.showUserInfo = true;
    this.cancelingCard = false;
    this.noTicketsFound = false;
    this.successfullCancelation = false;
    this.isLoading = false;
    this.hideElements = false;
  }

  onSearchUser() {
    this.activeSpinner();
    this.userService.findUser(this.userForm).subscribe(user => {
      this.activeUser = user;
      if (this.activeUser == null)  {
        this.findUser = true;
        this.inactiveSpinner();
        } else {
        this.inactiveSpinner();
        this.findUser = false;
        this.showUserInfo = false;
        this.searchReservedTickets();
        }
    }, error => {
      this.inactiveSpinner();
      this.findUser = true;
    });
  }

  searchReservedTickets() {
    this.ticketService.getReservedTickets(this.activeUser).subscribe(tickets => {
      this.ticketResult = tickets;
      if(this.ticketResult == null){
        this.noTicketsFound = true;
        } else {
        this.cancelingCard = true;

        }
    }, error => {
      console.log(error);
    });
  }

  selectTicket(ticket) {
    this.activeSpinner();
    this.cancelingCard = false;
    this.selectedTicket = ticket;
    this.selectedTicket.reserver = null;
    this.selectedTicket.reservationTimeout = null;
    this.selectedTicket.bookingId = null;
    this.ticketService.cancelReservation(this.selectedTicket).subscribe(ticket => {
      console.log(ticket);
      this.successfullCancelation = true;
      this.inactiveSpinner();
    }, error => {
      this.inactiveSpinner();
    });
  }

  startOver() {
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
