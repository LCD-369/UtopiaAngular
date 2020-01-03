import { Component, OnInit } from '@angular/core';
import { User } from "../models/User";

@Component({
  selector: 'app-bookingcard',
  templateUrl: './bookingcard.component.html',
  styleUrls: ['./bookingcard.component.css'],
})
export class BookingcardComponent implements OnInit {
  currentJustify = 'justified';
  currentUser = new User();

  constructor() {

  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}
