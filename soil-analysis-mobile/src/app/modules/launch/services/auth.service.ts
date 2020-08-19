import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { User } from '../../account/models/user.model';
import { UserCredential } from '../../account/models/user-credential.model';
import { ToastService } from '../../../shared/services/toast-service.service';
import { getSanitizedErrorMessage } from '../../../shared/helpers/error-message-sanitizer.helper';
import { State } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { loadCurrentUser } from '../../../store/actions/current-user.actions';

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
    private toastService: ToastService,
    private store: Store<State>,
  ) {
    this.endpoint = 'devices/login';
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
        this.store.dispatch(loadCurrentUser({ id: user.id }));
        return user;
      }),
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
            currentUser.username + ':' + password,
          );
          const user: User = { ...currentUser, authdata: userAuthdata };
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        },
        (res) => {
          this.toastService.presentToast(getSanitizedErrorMessage(res));
        },
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
