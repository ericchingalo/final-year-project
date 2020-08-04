import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { UsersState } from '../state/users.state';
import { UsersReducer } from './users.reducers';

export interface State {
  users: UsersState;
}

export const reducers: ActionReducerMap<State> = {
  users: UsersReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

/**
 *
 * @param state Root state
 */
export const getRootState = (state: State) => state;
