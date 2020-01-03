import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BookingcardComponent } from './bookingcard/bookingcard.component';
import { LogincardComponent } from './logincard/logincard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { NgbdDatepickerPopupComponent } from './ngbd-datepicker-popup/ngbd-datepicker-popup.component';
import { FlightService } from './services/flight.service';
import { TicketService } from './services/ticket.service';
import { AirportService } from './services/airport.service';
import { UserService } from './services/user.service';
import { SearchflightformComponent } from './searchflightform/searchflightform.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { UserreserveformComponent } from './userreserveform/Userreserveform.component';
import { UserpageComponent } from './userpage/userpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfilemodalComponent } from './profilemodal/profilemodal.component';
import { RegisteruserComponent } from './register-user/registeruser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    BookingcardComponent,
    LogincardComponent,
    LoginmodalComponent,
    BookingformComponent,
    NgbdDatepickerPopupComponent,
    SearchflightformComponent,
    CancelbookingComponent,
    UserreserveformComponent,
    UserpageComponent,
    RegistrationComponent,
    ProfilemodalComponent,
    RegisteruserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule, BrowserAnimationsModule
  ],
  providers: [FlightService, TicketService, AirportService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
