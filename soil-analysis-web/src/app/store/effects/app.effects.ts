import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import {
  loadCurrentUser,
  loadCurrentUserSuccess,
} from '../actions/app.actions';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../modules/user/services/user.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { loadCurrentUserFail } from '../actions/app.actions';
import { getErrorMessage } from '../../shared/helpers/error-message.helper';
import { sanitizeCurrentUser } from '../../modules/user/helpers/user-sanitizer.helper';
import { Router } from '@angular/router';

@Injectable()
export class AppEffects {
  id: string;
  constructor(
    private actions$: Actions,
    private cookieService: CookieService,
    private userService: UserService,
    private readonly router: Router
  ) {
    this.id = this.cookieService.get('soil-user');
  }

  loadCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCurrentUser),
      mergeMap((action) =>
        this.userService.findOneById(action.id).pipe(
          map(
            (user) =>
              loadCurrentUserSuccess({ user: sanitizeCurrentUser(user) }),
            catchError((res) => {
              if (res.status === 401) {
                this.cookieService.delete('soil-user', '/');
                this.router.navigate(['/']);
              }

              return of(
                loadCurrentUserFail({ error: getErrorMessage(res.error) })
              );
            })
          )
        )
      )
    )
  );

  init$ = createEffect(() =>
    defer(() => (this.id ? of(loadCurrentUser({ id: this.id })) : null))
  );
}
