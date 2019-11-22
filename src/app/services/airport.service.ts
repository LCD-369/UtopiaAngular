import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Airport } from '../models/Airport';

@Injectable()
export class AirportService {
postUrl = 'http://localhost:8082/search/api/airport/';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError('A data error occurred, please try again.');
  }

  getAirport() {
    return this.http.get<Airport[]>(this.postUrl)
    .pipe(catchError(this.handleError));
  }

}
