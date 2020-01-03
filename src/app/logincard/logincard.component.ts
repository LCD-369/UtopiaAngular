import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from "../auth/auth.service";
import { User } from "../models/User";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';

@Component({
  selector: 'app-logincard',
  templateUrl: './logincard.component.html',
  styleUrls: ['./logincard.component.css']
})
export class LogincardComponent implements OnInit {
  @Output() closeParentModal = new EventEmitter<any>();
  faLock = faLock;
  user: User;
  errorMessage: string;
  currentUser: any;

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

 private loginInfo: AuthLoginInfo

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService) {

  }

  ngOnInit() {
    // this.user = new User();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  loginUser() {

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.changeModalState();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  changeModalState() {
    this.closeParentModal.emit("content");
  }

  reloadPage() {
    window.location.reload();
  }

  userLoggedIn() {
    this.currentUser = sessionStorage.getItem('AuthUsername');
    if (this.currentUser !== null) {
      return true;
    } else {
      return false;
    }
  }

}
