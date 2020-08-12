import { createReducer, on, Action } from '@ngrx/store';
import { initialUsersState, userAdapter, UsersState } from '../state';
import { loadUsers, loadUsersFail, loadUsersSuccess } from '../actions';
import { editUserSuccess, editUserFail } from '../actions/users.actions';
import { Update } from '@ngrx/entity';
import {
  deleteUserSuccess,
  deleteUserFail,
  editUser,
} from '../actions/users.actions';
import {
  addUser,
  addUserSuccess,
  addUserFail,
  deleteUser,
} from '../actions/users.actions';
import {
  addingBaseState,
  addedBaseState,
  deletingBaseState,
  deletedBaseState,
  updatingBaseState,
  updatedBaseState,
} from '../state/base.state';
import {
  loadingBaseState,
  errorBaseState,
  loadedBaseState,
} from '../state/base.state';

export const reducer = createReducer(
  initialUsersState,
  on(loadUsers, (state) => ({ ...state, ...loadingBaseState })),
  on(loadUsersFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  })),
  on(loadUsersSuccess, (state, { users }) =>
    userAdapter.addMany(users, { ...state, ...loadedBaseState })
  ),
  on(addUser, (state) => ({ ...state, addingBaseState })),
  on(addUserSuccess, (state, { user }) =>
    userAdapter.addOne(user, { ...state, ...addedBaseState })
  ),
  on(addUserFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  })),
  on(deleteUser, (state) => ({ ...state, deletingBaseState })),
  on(deleteUserSuccess, (state, { id }) =>
    userAdapter.removeOne(id, { ...state, ...deletedBaseState })
  ),
  on(deleteUserFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  })),
  on(editUser, (state) => ({ ...state, ...updatingBaseState })),
  on(editUserSuccess, (state, { user }) =>
    userAdapter.updateOne(user, { ...state, ...updatedBaseState })
  ),
  on(editUserFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  }))
);

export function UsersReducer(
  state: UsersState | undefined,
  action: Action
): UsersState {
  return reducer(state, action);
}
