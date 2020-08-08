import { BaseState, initialBaseState } from '../state/base.state';
import { User } from 'src/app/modules/user/models/user.model';

export interface CurrentUserState extends BaseState {
  currentUser: User;
}

export const initialCurrentUserState: CurrentUserState = {
  ...initialBaseState,
  currentUser: null,
};
