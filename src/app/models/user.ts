import { Injectable } from '@angular/core';

@Injectable()
export class User {
  id: number;
  username: string;
  password: string;
  displayName: String;
  role: number;
  email: string;
  phone: string;
}
