import { createReducer, on } from '@ngrx/store';
import { initialUsersState, adapter, UsersState } from '../state';
import { loadUsers, loadUsersFail, loadUsersSuccess } from '../actions';
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
  )
);

export function UsersReducer(state, action): UsersState {
  return reducer(state, action);
}
