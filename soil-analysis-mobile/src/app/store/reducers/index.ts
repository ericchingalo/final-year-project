import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { currentUserReducer } from './current-user.reducer';
import { CurrentUserState } from '../states';
import { ResultsState } from '../states/results.state';
import { resultsReducer } from './results.reducer';

export interface State {
  currentUser: CurrentUserState;
  results: ResultsState;
}

export const reducers: ActionReducerMap<State> = {
  currentUser: currentUserReducer,
  results: resultsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

/**
 *
 * @param state Root state
 */
export const getRootState = (state: State) => state;
