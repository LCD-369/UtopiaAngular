import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Ticket } from '../models/Ticket';
import { User } from '../models/User';

@Injectable()
export class TicketService {
getUrl = 'http://localhost:8082/book/ticket/';
postUrl = 'http://localhost:8082/book/ticket/reserve/';
putUrl = 'http://localhost:8082/book/ticket/cancel';
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

  cancelReservation(ticket: Ticket) {
    return this.http.put(this.putUrl, ticket).pipe(catchError(this.handleError));
  }

  getReservedTickets(user): Observable<Ticket[]> {
    let params = new HttpParams();
    params = params.append('userid', user.id);
    return this.http.get<Ticket[]>(this.getUrl = 'http://localhost:8082/book/ticket/'+'find', { params: params })
    .pipe(catchError(this.handleError));
  }
}
