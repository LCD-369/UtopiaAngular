import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Ticket } from '../models/Ticket';

@Injectable()
export class TicketService {
postUrl = 'http://localhost:8082/search/ticket/';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError('A data error occurred, please try again.');
  }

  getTicket() {
    return this.http.get<Ticket[]>(this.postUrl)
    .pipe(catchError(this.handleError));
  }

  getAvailableTickets(flightNumber: number) : Observable<Ticket[]> {
    let getUrl = 'http://localhost:8082/book/ticket/'+flightNumber;
    return this.http.get<Ticket[]>(getUrl)
    .pipe(catchError(this.handleError));
  }
}
