import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../models/User";
import { UserService } from "../services/user.service";
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  @Output() closeParentModal = new EventEmitter<any>();
  currentUser: User;
  info: any;
  constructor(private userService: UserService, private router: Router, private token: TokenStorageService) {
  }

  ngOnInit() {
    this.currentUser = new User();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    this.userService.findUser(this.info.username).subscribe(
      data => {
        this.currentUser = data;
      }, error => {
        console.log(error);
      }
    )
  }

  logOut(){
    this.token.signOut();
    this.changeModalState();
  }

  changeModalState() {
    this.closeParentModal.emit("content");
  }

}
