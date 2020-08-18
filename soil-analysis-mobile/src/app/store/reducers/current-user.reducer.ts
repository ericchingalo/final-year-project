import { createReducer, on, Action } from '@ngrx/store';
import {
  loadCurrentUser,
  loadCurrentUserSuccess,
  loadCurrentUserFail,
} from '../actions';
import { initialCurrentUserState, CurrentUserState } from '../states';
import {
  editUser,
  editUserSuccess,
  editUserFail,
} from '../actions/current-user.actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState,
  updatingBaseState,
  updatedBaseState,
} from '../states/base.state';

export const reducer = createReducer(
  initialCurrentUserState,
  on(loadCurrentUser, (state) => ({ ...state, ...loadingBaseState })),
  on(loadCurrentUserSuccess, (state, { user }) => ({
    ...state,
    ...loadedBaseState,
    currentUser: user,
  })),
  on(loadCurrentUserFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  })),
  on(editUser, (state) => ({ ...state, ...updatingBaseState })),
  on(editUserSuccess, (state, { user }) => ({
    ...state,
    ...updatedBaseState,
    currentUser: { ...state.currentUser, ...user },
  })),
  on(editUserFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  })),
);

export function currentUserReducer(
  state: CurrentUserState | undefined,
  action: Action,
): CurrentUserState {
  return reducer(state, action);
}
