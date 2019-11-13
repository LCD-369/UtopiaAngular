import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule } from '@angular/Forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BookingcardComponent } from './bookingcard/bookingcard.component';
import { LogincardComponent } from './logincard/logincard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { SearchformComponent } from './searchform/searchform.component';
import { NgbdDatepickerPopupComponent } from './ngbd-datepicker-popup/ngbd-datepicker-popup.component';
import { AirportlookupmodalComponent } from './airportlookupmodal/airportlookupmodal.component';
import { FlightService } from './services/flight.service';
import { TicketService } from './services/ticket.service';
import { AirportService } from './services/airport.service';
import { UserService } from './services/user.service';
import { AirportlookupfromComponent } from './airportlookupfrom/airportlookupfrom.component';
import { AirportlookuptoComponent } from './airportlookupto/airportlookupto.component';
import { SearchflightformComponent } from './searchflightform/searchflightform.component';

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
    SearchformComponent,
    NgbdDatepickerPopupComponent,
    AirportlookupmodalComponent,
    AirportlookupfromComponent,
    AirportlookuptoComponent,
    SearchflightformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    // ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FlightService, TicketService, AirportService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
