import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class UserService {
postUrl = 'http://localhost:8082/user/search';
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

  getUser() {
    return this.http.get<User[]>(this.postUrl)
    .pipe(catchError(this.handleError));
  }

  findUser(userForm) {
    let params = new HttpParams();

    params = params.append('username', userForm.value.username);
    params = params.append('password', userForm.value.password);
    return this.http.get<User>(this.postUrl, { params: params })
    .pipe(catchError(this.handleError));
  }

}
