import { createSelector } from '@ngrx/store';
import { getRootState } from '../reducers';
import { State } from 'src/app/store/reducers';
import { CurrentUserState } from '../states';

export const getCurrentUserState = createSelector(
  getRootState,
  (state: State) => state.currentUser,
);

export const getCurrentUser = createSelector(
  getCurrentUserState,
  (state: CurrentUserState) => state.currentUser,
);

export const getCurrentUserLoading = createSelector(
  getCurrentUserState,
  (state: CurrentUserState) => state.loading,
);

export const getCurrentUserLoaded = createSelector(
  getCurrentUserState,
  (state: CurrentUserState) => state.loaded,
);
