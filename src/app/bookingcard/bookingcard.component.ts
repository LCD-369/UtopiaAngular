import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookingcard',
  templateUrl: './bookingcard.component.html',
  styleUrls: ['./bookingcard.component.css']
})
export class BookingcardComponent implements OnInit {
  currentJustify = 'justified';
  constructor() { }

  ngOnInit() {
  }

}
