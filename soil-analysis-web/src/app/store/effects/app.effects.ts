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

@Injectable()
export class AppEffects {
  id: string;
  constructor(
    private actions$: Actions,
    private cookieService: CookieService,
    private userService: UserService
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
            catchError((error) =>
              of(loadCurrentUserFail({ error: getErrorMessage(error) }))
            )
          )
        )
      )
    )
  );

  init$ = createEffect(() => defer(() => of(loadCurrentUser({ id: this.id }))));
}
