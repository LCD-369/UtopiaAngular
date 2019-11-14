import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-ngbd-datepicker-popup',
  templateUrl: './ngbd-datepicker-popup.component.html',
  styleUrls: ['./ngbd-datepicker-popup.component.css']
})
export class NgbdDatepickerPopupComponent implements OnInit {
  faCalendarAlt = faCalendarAlt;
  constructor() { }

  ngOnInit() {
  }

}
