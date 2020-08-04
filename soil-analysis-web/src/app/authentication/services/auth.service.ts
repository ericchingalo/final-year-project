import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserCredentials } from '../models/user-credentials.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string;
  endpoint: string;
  constructor(private readonly http: HttpClient) {
    (this.endpoint = 'users/login'), (this.url = 'localhost:3000/api');
  }

  login(userCreadentials: UserCredentials): Observable<any> {
    return this.http.post(`${this.url}/${this.endpoint}`, userCreadentials);
  }

  logout() {}
}
