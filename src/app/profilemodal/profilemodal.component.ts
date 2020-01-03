import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-profilemodal',
  templateUrl: './profilemodal.component.html',
  styleUrls: ['./profilemodal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ProfilemodalComponent implements OnInit {

  currentUser: any;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.centered = true;
  }

  ngOnInit() {
    this.currentUser = sessionStorage.getItem('currentUser');
  }

  open(content) {
    this.modalService.open(content);
  }

  dismissModal($event: any) {
    this.modalService.dismissAll($event);

  }

  userLoggedIn() {
    if (this.currentUser !== null) {
      return true;
    } else {
      return false;
    }
  }

}
