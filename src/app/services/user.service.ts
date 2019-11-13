import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class UserService {
postUrl = 'http://localhost:8082/search/user/';
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError('A data error occurred, please try again.');
  }

  getUser() {
    return this.http.get<User[]>(this.postUrl)
    .pipe(catchError(this.handleError));
  }
}
