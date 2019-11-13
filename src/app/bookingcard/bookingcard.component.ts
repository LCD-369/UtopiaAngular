import { Component, OnInit } from '@angular/core';
import { Airport} from '../models/Airport';

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
