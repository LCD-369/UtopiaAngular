import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css'],
   providers: [NgbModalConfig, NgbModal]
})
export class BookingformComponent implements OnInit {
  faSearch = faSearch;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.centered = true;
  }

  openFrom(contentFrom) {
    this.modalService.open(contentFrom);
  }
  openTo(contentTo) {
    this.modalService.open(contentTo);
  }

  ngOnInit() {
  }

}
