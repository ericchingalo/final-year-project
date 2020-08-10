import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as _ from 'lodash';

import { UserService } from '../../modules/user/services/user.service';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFail,
} from '../actions/users.actions';
import {
  addUser,
  addUserSuccess,
  addUserFail,
  deleteUser,
  deleteUserSuccess,
  deleteUserFail,
} from '../actions/users.actions';
import {
  editUser,
  editUserSuccess,
  editUserFail,
} from '../actions/users.actions';
import { getErrorMessage } from '../../shared/helpers/error-message.helper';
import {
  userSanitizer,
  sanitizeCurrentUser,
} from '../../modules/user/helpers/user-sanitizer.helper';
import { SnackbarService } from '../../shared/services/snackbar.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private usersService: UserService,
    private readonly snackbarService: SnackbarService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.usersService.findAll().pipe(
          map((users) => loadUsersSuccess({ users: userSanitizer(users) })),
          catchError((res) =>
            of(loadUsersFail({ error: getErrorMessage(res) }))
          )
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      mergeMap((action) =>
        this.usersService.create(action.user).pipe(
          map(
            (user) => addUserSuccess({ user: sanitizeCurrentUser(user) }),
            catchError((res) => {
              const err: string = getErrorMessage(res);
              this.snackbarService.openSnackBar(err, 'OK');
              return of(addUserFail({ error: err }));
            })
          )
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      mergeMap((action) =>
        this.usersService.delete(action.id).pipe(
          map(() => {
            this.snackbarService.openSnackBar('Deleted User', 'OK');
            return deleteUserSuccess({ id: action.id });
          }),
          catchError((res) => {
            const err: string = getErrorMessage(res);
            this.snackbarService.openSnackBar(err, 'OK');
            return of(deleteUserFail({ error: err }));
          })
        )
      )
    )
  );

  editUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editUser),
      mergeMap((action) =>
        this.usersService.update(action.user.id, action.user).pipe(
          map((user) =>
            editUserSuccess({
              user: {
                id: user.id,
                changes: {
                  ...user,
                  roles: _.map(user.roles, (role) => role.name),
                },
              },
            })
          ),
          catchError((res) => {
            const err: string = getErrorMessage(res);
            this.snackbarService.openSnackBar(err, 'OK');
            return of(editUserFail({ error: err }));
          })
        )
      )
    )
  );
}
