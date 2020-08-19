import { createReducer, Action, on } from '@ngrx/store';
import {
  initialResultsState,
  ResultsState,
  resultsAdapter,
} from '../states/results.state';
import {
  loadResults,
  loadResultsSuccess,
  loadResultsFail,
} from '../actions/results.actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState,
} from '../states/base.state';

export const reducer = createReducer(
  initialResultsState,
  on(loadResults, (state) => ({ ...state, ...loadingBaseState })),
  on(loadResultsSuccess, (state, { results }) =>
    resultsAdapter.addMany(results, { ...state, ...loadedBaseState }),
  ),
  on(loadResultsFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  })),
);

export function resultsReducer(
  state: ResultsState | undefined,
  action: Action,
): ResultsState {
  return reducer(state, action);
}
