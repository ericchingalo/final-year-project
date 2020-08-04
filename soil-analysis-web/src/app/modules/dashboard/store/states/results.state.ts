import { EntityState, createEntityAdapter } from '@ngrx/entity';
import {
  BaseState,
  initialBaseState,
} from '../../../../store/state/base.state';
import { Result } from '../../models/results.model';
import { createFeatureSelector } from '@ngrx/store';

export interface ResultsState extends BaseState, EntityState<Result> {}

export function selectResultsID(result: Result): string {
  return result.id;
}

export const resultsAdapter = createEntityAdapter<Result>({
  sortComparer: null,
  selectId: selectResultsID,
});

export const initialResultsState = resultsAdapter.getInitialState({
  ...initialBaseState,
});

export const {
  selectAll: selectAllResults,
  selectIds: selectResultsIds,
} = resultsAdapter.getSelectors();

/**
 * feature selector
 */
export const getServicesState = createFeatureSelector<any>('results');
