import { createReducer, on } from '@ngrx/store';
import { initialUsersState, adapter, UsersState } from '../state';
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
    adapter.addMany(users, { ...state, ...loadedBaseState })
  ),
  on(addUser, (state) => ({ ...state, addingBaseState })),
  on(addUserSuccess, (state, { user }) =>
    adapter.addOne(user, { ...state, ...addedBaseState })
  ),
  on(addUserFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  })),
  on(deleteUser, (state) => ({ ...state, deletingBaseState })),
  on(deleteUserSuccess, (state, { id }) =>
    adapter.removeOne(id, { ...state, ...deletedBaseState })
  ),
  on(deleteUserFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  })),
  on(editUser, (state) => ({ ...state, ...updatingBaseState })),
  on(editUserSuccess, (state, { user }) =>
    adapter.updateOne(user, { ...state, ...updatedBaseState })
  ),
  on(editUserFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  }))
);

export function UsersReducer(state, action): UsersState {
  return reducer(state, action);
}
