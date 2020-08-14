import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { User } from '../../modules/user/models/user.model';

export const loadUsers = createAction('[USERS] Load Users');

export const loadUsersSuccess = createAction(
  '[USERS] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFail = createAction(
  '[USERS] Load Users Fail',
  props<{ error: string }>()
);

export const addUser = createAction(
  '[USERS] Add User',
  props<{ user: User }>()
);

export const addUserSuccess = createAction(
  '[USERS] Add User Success',
  props<{ user: User }>()
);

export const addUserFail = createAction(
  '[USERS] Add User Fail',
  props<{ error: string }>()
);

export const editUser = createAction(
  '[USERS] Edit User',
  props<{ user: User }>()
);

export const editUserSuccess = createAction(
  '[USERS] Edit User Success',
  props<{ user: Update<User> }>()
);

export const editUserFail = createAction(
  '[USERS] Edit User Fail',
  props<{ error: string }>()
);

export const deleteUser = createAction(
  '[USERS] Delete User',
  props<{ id: string }>()
);

export const deleteUserSuccess = createAction(
  '[USERS] Delete User Success',
  props<{ id: string }>()
);

export const deleteUserFail = createAction(
  '[USERS] Edit User Fail',
  props<{ error: string }>()
);
