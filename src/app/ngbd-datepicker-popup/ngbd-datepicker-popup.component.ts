import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import {NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-datepicker-popup',
  templateUrl: './ngbd-datepicker-popup.component.html',
  providers: [NgbDatepickerConfig]
})
export class NgbdDatepickerPopupComponent implements OnInit {
  faCalendarAlt = faCalendarAlt;
  model;

  constructor(config: NgbDatepickerConfig) {
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};
    config.outsideDays = 'hidden';
  }

  ngOnInit() {
  }

}
