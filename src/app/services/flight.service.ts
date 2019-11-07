import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Flight } from '../models/Flight';


@Injectable()
export class FlightService {
postUrl = 'http://localhost:8082/search/flight/';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError('A data error occurred, please try again.');
  }

  getFlight() {
    return this.http.get<Flight[]>(this.postUrl)
    .pipe(catchError(this.handleError));
  }

}
