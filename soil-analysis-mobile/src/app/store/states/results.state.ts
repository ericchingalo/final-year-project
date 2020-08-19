import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { BaseState, initialBaseState } from './base.state';
import { Result } from 'src/app/modules/history/models/results.model';
import { sortByDate } from '../../shared/helpers/sort-by-date.helper';

export interface ResultsState extends BaseState, EntityState<Result> {}

export function selectResultsID(result: Result): string {
  return result.id;
}

export function sortResultsByDate(result1: Result, result2: Result): number {
  return sortByDate(result1, result2);
}

export const resultsAdapter = createEntityAdapter<Result>({
  sortComparer: sortResultsByDate,
  selectId: selectResultsID,
});

export const initialResultsState = resultsAdapter.getInitialState({
  ...initialBaseState,
});

export const {
  selectAll: selectAllResults,
  selectIds: selectResultsIds,
} = resultsAdapter.getSelectors();
