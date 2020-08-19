import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { UsersState } from '../state/users.state';
import { UsersReducer } from './users.reducers';
import { DevicesState } from '../state/devices.state';
import { DevicesReducer } from './devices.reducers';
import { CurrentUserState } from '../state/current-user.state';
import { CurrentUserReducer } from './current-user.reducer';
import { ResultsState } from '../../modules/dashboard/store/states/results.state';
import { ResultsReducer } from 'src/app/modules/dashboard/store/reducers/results.reducers';

export interface State {
  users: UsersState;
  devices: DevicesState;
  currentUser: CurrentUserState;
  results: ResultsState;
}

export const reducers: ActionReducerMap<State> = {
  users: UsersReducer,
  devices: DevicesReducer,
  currentUser: CurrentUserReducer,
  results: ResultsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

/**
 *
 * @param state Root state
 */
export const getRootState = (state: State) => state;
