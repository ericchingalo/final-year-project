import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { UsersState } from '../state/users.state';
import { UsersReducer } from './users.reducers';
import { DevicesState } from '../state/devices.state';
import { DevicesReducer } from './devices.reducers';

export interface State {
  users: UsersState;
  devices: DevicesState;
}

export const reducers: ActionReducerMap<State> = {
  users: UsersReducer,
  devices: DevicesReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

/**
 *
 * @param state Root state
 */
export const getRootState = (state: State) => state;
