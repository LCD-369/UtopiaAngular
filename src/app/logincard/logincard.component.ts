import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-logincard',
  templateUrl: './logincard.component.html',
  styleUrls: ['./logincard.component.css']
})
export class LogincardComponent implements OnInit {
  loginForm = new FormGroup({
  userEmail: new FormControl(''),
  userPassword: new FormControl('')

  });
  constructor() { }

  ngOnInit() {
  }

  loginUser() {

  }

}
