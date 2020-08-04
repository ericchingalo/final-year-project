import { createReducer, on } from '@ngrx/store';
import {
  initialResultsState,
  ResultsState,
  resultsAdapter,
} from '../states/results.state';
import {
  loadResults,
  loadResultsFail,
  loadResultsSuccess,
} from '../acrions/results.actions';
import {
  loadingBaseState,
  loadedBaseState,
} from 'src/app/store/state/base.state';
import { errorBaseState } from '../../../../store/state/base.state';

export const reducer = createReducer(
  initialResultsState,
  on(loadResults, (state) => ({ ...state, ...loadingBaseState })),
  on(loadResultsSuccess, (state, { results }) =>
    resultsAdapter.addMany(results, { ...state, ...loadedBaseState })
  ),
  on(loadResultsFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  }))
);

export function ResultsReducer(state, action): ResultsState {
  return reducer(state, action);
}
