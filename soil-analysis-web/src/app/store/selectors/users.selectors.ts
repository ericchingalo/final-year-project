import * as _ from 'lodash';
import { createSelector } from '@ngrx/store';
import { getRootState } from '../reducers/index';
import { State } from 'src/app/store/reducers';
import { selectAllUsers } from '../state';
import { User } from '../../modules/user/models/user.model';
import { UsersState } from '../state/users.state';

export const getUserState = createSelector(
  getRootState,
  (state: State) => state.users
);

export const getAllUsers = createSelector(getUserState, selectAllUsers);

export const getUserById = (id: string) =>
  createSelector(getAllUsers, (users: User[]) =>
    _.find(users, (user: User) => user.id === id)
  );

export const getUsersLoading = createSelector(
  getUserState,
  (state: UsersState) => state.loading
);

export const getUserLoaded = createSelector(
  getUserState,
  (state: UsersState) => state.loaded
);
