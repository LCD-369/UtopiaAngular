import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User;
  errorMessage:string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  this.user = new User();
  }

  register() {
    this.authService.register(this.user).subscribe(data =>{
      this.router.navigate(['/login']);
    },err => {
      this.errorMessage = "Username already exist";
    });
  }

}
