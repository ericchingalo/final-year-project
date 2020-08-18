import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../modules/launch/services/auth.service';
import { User } from '../../modules/account/models/user.model';
import {
  loadCurrentUser,
  loadCurrentUserSuccess,
} from '../actions/current-user.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../modules/account/services/user.service';
import { of, defer } from 'rxjs';
import { loadCurrentUserFail } from '../actions/current-user.actions';
import { getSanitizedErrorMessage } from '../../shared/helpers/error-message-sanitizer.helper';
import { userSanitizer } from '../../modules/account/helpers/user-sanitizer.helper';

@Injectable()
export class CurrentUserEffects {
  currentUser: User;
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserService,
  ) {
    this.currentUser = authService.currentUserValue;
  }

  loadCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCurrentUser),
      switchMap((action) =>
        this.userService.findOneById(this.currentUser.id).pipe(
          map(
            (user) =>
              loadCurrentUserSuccess({
                user: { ...this.currentUser, ...userSanitizer(user) },
              }),
            catchError((res: any) =>
              of(loadCurrentUserFail({ error: getSanitizedErrorMessage(res) })),
            ),
          ),
        ),
      ),
    ),
  );

  init$ = createEffect(() =>
    defer(() =>
      this.currentUser && this.currentUser.id
        ? of(loadCurrentUser({ id: this.currentUser.id }))
        : null,
    ),
  );
}
