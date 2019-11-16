import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { PickerModel } from '../models/PickerModel';
import {NgbDatepickerConfig, NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-datepicker-popup',
  templateUrl: './ngbd-datepicker-popup.component.html',
  providers: [NgbDatepickerConfig]
})
export class NgbdDatepickerPopupComponent implements OnInit {
  @Output() valuePassed = new EventEmitter();
  faCalendarAlt = faCalendarAlt;
  pickerModel: PickerModel;
  model: {year: number, month: number, day: number};;
  date: {year: number, month: number, day: number};


  constructor(config: NgbDatepickerConfig, calendar: NgbCalendar) {
    // customize default values of datepickers used by this component tree
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};
    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';

  }

  ngOnInit() {
    this.pickerModel = new PickerModel();
    this.pickerModel.day = 1;
    this.pickerModel.month = 12;
    this.pickerModel.year = 2020;
  }

  passValue() {
    console.log(this.model);
    this.valuePassed.emit(this.model);
  }

}
