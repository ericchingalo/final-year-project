import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserCredentials } from '../models/user-credentials.model';
import { User } from 'src/app/modules/user/models/user.model';
import { map, take } from 'rxjs/operators';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { getErrorMessage } from '../../shared/helpers/error-message.helper';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string;
  endpoint: string;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(
    private readonly http: HttpClient,
    private snackbarService: SnackbarService
  ) {
    this.endpoint = 'users/login';
    this.url = 'https://chingalo.site/soil-analysis/api';
    // this.url = 'api';
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(userCreadentials: UserCredentials): Observable<any> {
    const path = `${this.url}/${this.endpoint}`;
    return this.http.post(path, userCreadentials).pipe(
      map((user: any) => {
        user.authdata = window.btoa(
          userCreadentials.username + ':' + userCreadentials.password
        );
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  updateUserPassword(password: string) {
    const currentUser = this.currentUserValue;
    this.http
      .post(`${this.url}/users/${currentUser.id}/change-password`, { password })
      .pipe(take(1))
      .subscribe(
        () => {
          const userAuthdata = window.btoa(
            currentUser.username + ':' + password
          );
          const user: User = { ...currentUser, authdata: userAuthdata };
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.snackbarService.openSnackBar('Password Changed', 'OK');
        },
        (res) => {
          this.snackbarService.openSnackBar(getErrorMessage(res), 'OK');
        }
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
