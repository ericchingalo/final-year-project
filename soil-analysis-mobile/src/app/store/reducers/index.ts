import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { currentUserReducer } from './current-user.reducer';
import { CurrentUserState } from '../states';

export interface State {
  currentUser: CurrentUserState;
}

export const reducers: ActionReducerMap<State> = {
  currentUser: currentUserReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

/**
 *
 * @param state Root state
 */
export const getRootState = (state: State) => state;
