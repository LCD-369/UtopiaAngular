import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable()
export class AuthService {

  API_URL = 'http://localhost:8082/api/user/';

  constructor(private http: HttpClient) { }

  login(user: User) {
    let username = user.username;
    let password = user.password;
    return this.http.post<any>('http://localhost:8082/api/user/login', {username,password}).pipe(
      map(
      response => {
        console.log(response.user);
        sessionStorage.setItem('currentUser', response.user);
        let tokenStr= 'Bearer '+response.accessToken;
        sessionStorage.setItem('token', tokenStr);
      return response;
      }
    ));
  }

  register(user: User): Observable<any> {
    return this.http.post(this.API_URL + 'registration', JSON.stringify(user),
    {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  logOut(): Observable<any> {
    return this.http.post('http://localhost:8082/api/user/logout', {})
    .pipe(map(response => {
      sessionStorage.removeItem('currentUser');
      sessionStorage.removeItem('token');
    }));
  }

  findAllUsers(): Observable<any> {
    return this.http.get(this.API_URL + "all",
  {headers: {"Content-Type": "application/json; charset=UTF-8"}})
  }
}
