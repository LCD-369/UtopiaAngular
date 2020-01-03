import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userreserveform',
  templateUrl: './userreserveform.component.html',
  styleUrls: ['./userreserveform.component.css']
})
export class UserreserveformComponent implements OnInit {
  @Output() changeParentActiveUser = new EventEmitter<any>();
  @Output() changeParentShowUserInfo = new EventEmitter<boolean>();
  @Output() changeParentBookingCard = new EventEmitter<boolean>();
  @Output() changeParentHideElements = new EventEmitter<boolean>();
  @Input() showUserInfo: boolean;
  @Input() bookingCard: boolean;
  @Input() hideElements: boolean;


  faArrowCircleDown = faArrowCircleDown;
  userForm: FormGroup;
  activeUser: any;
  findUser: boolean;
  isLoading: boolean;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.activeUser = new Object();
    this.findUser = false;
    this.isLoading = false;
  }

  onSearchUser() {
    this.activeSpinner();
    this.userService.findUser(this.userForm).subscribe(user => {
      this.activeUser = user;
      if (this.activeUser == null){
        this.inactiveSpinner();
        this.findUser = true;
      } else {
        this.changeAU();
        this.findUser = false;
        this.inactiveSpinner();
        this.changeB();
        this.changeU();
      }
    }, error => {
      console.log(error);
      this.inactiveSpinner();
      this.findUser = true;
    })
  }

  changeAU() {
    this.changeParentActiveUser.emit(this.activeUser);
  }

  changeU() {
    this.changeParentShowUserInfo.emit(false);
  }

  changeB() {
    this.changeParentBookingCard.emit(true);
  }

  activeSpinner() {
    this.isLoading = true;
    this.changeParentHideElements.emit(true);
  }

  inactiveSpinner() {
    this.isLoading = false;
    this.changeParentHideElements.emit(false);
  }
}
