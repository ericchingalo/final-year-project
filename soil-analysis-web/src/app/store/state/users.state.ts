import { BaseState, initialBaseState } from './base.state';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { User } from '../../modules/user/models/user.model';

export interface UsersState extends BaseState, EntityState<User> {}

export function selectUserId(user: User): string {
  return user.id;
}

export const adapter = createEntityAdapter<User>({
  sortComparer: false,
  selectId: selectUserId,
});

export const initialUsersState = adapter.getInitialState({
  ...initialBaseState,
});

export const {
  selectAll: selectAllUsers,
  selectIds: selectUserIds,
} = adapter.getSelectors();
