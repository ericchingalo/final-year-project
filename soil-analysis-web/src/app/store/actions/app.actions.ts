import { createAction, props } from '@ngrx/store';
import { User } from '../../modules/user/models/user.model';

export const loadCurrentUser = createAction(
  '[APP] Load Current User',
  props<{ id: string }>()
);

export const loadCurrentUserSuccess = createAction(
  '[APP] Load Current User success',
  props<{ user: User }>()
);

export const loadCurrentUserFail = createAction(
  '[APP] Load Current User Fail',
  props<{ error: string }>()
);
