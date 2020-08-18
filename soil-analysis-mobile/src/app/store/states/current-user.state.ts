import { BaseState, initialBaseState } from './base.state';
import { User } from 'src/app/modules/account/models/user.model';

export interface CurrentUserState extends BaseState {
  currentUser: User;
}

export const initialCurrentUserState: CurrentUserState = {
  ...initialBaseState,
  currentUser: null,
};
