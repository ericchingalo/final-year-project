import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../../account/models/user.model';
import { UserCredential } from '../../account/models/user-credential.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string;
  endpoint: string;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private readonly http: HttpClient) {
    this.endpoint = 'users/login';
    this.url = 'https://chingalo.site/soil-analysis/api';
    // this.url = 'api';
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser')),
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(userCreadentials: UserCredential): Observable<any> {
    const path = `${this.url}/${this.endpoint}`;
    return this.http.post(path, userCreadentials).pipe(
      map((user: any) => {
        user.authdata = window.btoa(
          userCreadentials.username + ':' + userCreadentials.password,
        );
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }),
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
