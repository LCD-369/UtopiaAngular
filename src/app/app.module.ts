import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { BookingSearchResultComponent } from './booking-search-result/booking-search-result.component';

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
    SearchflightformComponent,
    BookingSearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [FlightService, TicketService, AirportService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
