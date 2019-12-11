import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Flight } from '../models/Flight';
import { Booking } from '../models/Booking';

@Injectable()
export class FlightService {
  getUrl = 'http://localhost:8082/search/flights/';
  getByUrl = 'http://localhost:8082/search/flight/';
  queryUrl: string = '?search=';
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('A data error occurred, please try again.');
  }

  getFlight(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.getUrl)
      .pipe(catchError(this.handleError));
  }

  findFlight(flight: Booking): Observable<Object> {
    let getUrlHeaders = this.getByUrl + flight.departureAirport.code + '/' + flight.destination.code + '/' + flight.departureDate + '/' + flight.arrivalDate;
    return this.http.get<Object>(getUrlHeaders)
      .pipe(catchError(this.handleError));
  }

  findFlightByDestination(code: string): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.getByUrl + 'destination/' + code)
      .pipe(catchError(this.handleError));
  }

  findFlightByDeparture(code: string): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.getByUrl + 'departure/' + code)
      .pipe(catchError(this.handleError));
  }

  searchDepEntries(term): Observable<any> {
    return this.http.get(this.getByUrl + 'departure/' + term)
    .pipe(catchError(this.handleError));
  }

  searchDesEntries(term): Observable<any> {
    return this.http.get(this.getByUrl + 'destination/' + term)
    .pipe(catchError(this.handleError));
  }


}
