import { BaseState, initialBaseState } from './base.state';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { User } from '../../modules/user/models/user.model';
import { sortByDate } from '../../shared/helpers/sort-by-date.helper';

export interface UsersState extends BaseState, EntityState<User> {}

export function selectUserId(user: User): string {
  return user.id;
}

export function sortUserByDate(user1: User, user2: User): number {
  return sortByDate(user1, user2);
}

export const userAdapter = createEntityAdapter<User>({
  sortComparer: sortUserByDate,
  selectId: selectUserId,
});

export const initialUsersState = userAdapter.getInitialState({
  ...initialBaseState,
});

export const {
  selectAll: selectAllUsers,
  selectIds: selectUserIds,
} = userAdapter.getSelectors();
