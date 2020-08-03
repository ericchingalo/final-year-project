import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { UsersState } from '../state/users.state';
import { UsersReducer } from './users.reducer';

export interface State {
  users: UsersState;
}

export const reducers: ActionReducerMap<State> = {
  users: UsersReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
