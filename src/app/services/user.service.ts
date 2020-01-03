import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class UserService {
  private userUrl = 'http://localhost:8080/api/test/user';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  postUrl = 'http://localhost:8082/user/search';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
    } else {
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

  findUser(username) {
    let params = new HttpParams();
    params = params.append('username', username);
    return this.http.get<User>(this.postUrl, { params: params })
    .pipe(catchError(this.handleError));
  }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

}
