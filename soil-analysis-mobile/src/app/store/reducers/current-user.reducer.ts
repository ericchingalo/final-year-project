import { createReducer, on, Action } from '@ngrx/store';
import {
  loadCurrentUser,
  loadCurrentUserSuccess,
  loadCurrentUserFail,
} from '../actions';
import { initialCurrentUserState, CurrentUserState } from '../states';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState,
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
);

export function currentUserReducer(
  state: CurrentUserState | undefined,
  action: Action,
): CurrentUserState {
  return reducer(state, action);
}
