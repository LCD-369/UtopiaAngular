import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { PickerModel } from '../models/PickerModel';
import {NgbDatepickerConfig, NgbCalendar, NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-datepicker-popup',
  templateUrl: './ngbd-datepicker-popup.component.html',
  providers: [NgbDatepickerConfig]
})
export class NgbdDatepickerPopupComponent implements OnInit {
  @Output() valuePassed = new EventEmitter<NgbDateStruct>();
  faCalendarAlt = faCalendarAlt;
  pickerModel: PickerModel;
  model;



  constructor(config: NgbDatepickerConfig, calendar: NgbCalendar) {
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};
    config.outsideDays = 'hidden';
  }

  ngOnInit() {
    // this.model = new NgbDate(null, null, null);
    this.pickerModel = new PickerModel();
    this.pickerModel.day = 1;
    this.pickerModel.month = 12;
    this.pickerModel.year = 2020;
  }



}
