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
    this.endpoint = 'users/login';
    this.url = 'api';
  }

  login(userCreadentials: UserCredentials): Observable<any> {
    const path = `${this.url}/${this.endpoint}`;
    return this.http.post(path, userCreadentials);
  }

  logout() {}
}
