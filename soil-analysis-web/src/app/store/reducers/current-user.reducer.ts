import { createReducer, on } from '@ngrx/store';
import {
  loadCurrentUser,
  loadCurrentUserSuccess,
  loadCurrentUserFail,
} from '../actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState,
} from '../state/base.state';
import { initialCurrentUserState } from '../state';
import { CurrentUserState } from '../state/current-user.state';

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
  }))
);

export function CurrentUserReducer(state, action): CurrentUserState {
  return reducer(state, action);
}
