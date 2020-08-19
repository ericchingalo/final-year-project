import { createSelector } from '@ngrx/store';
import { selectAllResults, ResultsState } from '../states/results.state';
import { getRootState, State } from 'src/app/store/reducers';

export const getResultsState = createSelector(
  getRootState,
  (state: State) => state.results
);

export const getAllResults = createSelector(getResultsState, selectAllResults);

export const getResultsLoadingState = createSelector(
  getResultsState,
  (state: ResultsState) => (state ? state.loading : false)
);
