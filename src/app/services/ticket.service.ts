import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Ticket } from '../models/Ticket';
import { User } from '../models/User';

@Injectable()
export class TicketService {
getUrl = 'http://localhost:8082/book/ticket/';
postUrl = 'http://localhost:8082/book/ticket/reserve/';
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError('A data error occurred, please try again.');
  }

  getTicket() {
    return this.http.get<Ticket[]>(this.getUrl)
    .pipe(catchError(this.handleError));
  }

  getAvailableTickets(flightNumber: number): Observable<Ticket[]> {
    let getUrl = 'http://localhost:8082/book/ticket/'+flightNumber;
    return this.http.get<Ticket[]>(getUrl)
    .pipe(catchError(this.handleError));
  }

  reserveFlight(ticket: Ticket, user: User) {
    return this.http.post(this.postUrl+ticket.flight.id+'/'+ticket.row+'/'+ticket.seat, user).pipe(catchError(this.handleError));
  }
}
