import { createAction, props } from '@ngrx/store';
import { Result } from '../../models/results.model';

export const loadResults = createAction('[RESULTS] Load Results');

export const loadResultsSuccess = createAction(
  '[RESULTS] Load Results Success',
  props<{ results: Result[] }>()
);

export const loadResultsFail = createAction(
  '[RESULTS] Load Results Fail',
  props<{ error: string }>()
);
