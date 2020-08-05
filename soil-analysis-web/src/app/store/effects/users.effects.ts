import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

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

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private usersService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.usersService.findAll().pipe(
          map((users) => loadUsersSuccess({ users })),
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
            (user) => addUserSuccess({ user }),
            catchError((res) =>
              of(addUserFail({ error: getErrorMessage(res) }))
            )
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
          map(() => deleteUserSuccess({ id: action.id })),
          catchError((res) =>
            of(deleteUserFail({ error: getErrorMessage(res) }))
          )
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
            editUserSuccess({ user: { id: user.id, changes: user } })
          ),
          catchError((res) => of(editUserFail({ error: getErrorMessage(res) })))
        )
      )
    )
  );
}