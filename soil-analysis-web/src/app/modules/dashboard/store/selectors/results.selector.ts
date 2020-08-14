import { createSelector } from '@ngrx/store';
import {
  getResultsState,
  selectAllResults,
  ResultsState,
} from '../states/results.state';
import { ResultsFeatureState } from '../reducers/index';

export const getAllResults = createSelector(getResultsState, selectAllResults);

export const getOriginalResultState = createSelector(
  getResultsState,
  (state: ResultsFeatureState) => (state ? state.results : null)
);

export const getResultsLoadingState = createSelector(
  getOriginalResultState,
  (state: ResultsState) => (state ? state.loading : false)
);
