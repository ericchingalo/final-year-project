import { createSelector } from '@ngrx/store';
import * as _ from 'lodash';

import { selectAllResults, ResultsState } from '../states/results.state';
import { getRootState, State } from 'src/app/store/reducers';
import { Result } from '../../modules/history/models/results.model';

export const getResultsState = createSelector(
  getRootState,
  (state: State) => state.results,
);

export const getAllResults = createSelector(getResultsState, selectAllResults);

export const getResultsById = (id) =>
  createSelector(getAllResults, (results: Result[]) =>
    _.find(results, (data: Result) => data.id === id),
  );

export const getResultsLoadingState = createSelector(
  getResultsState,
  (state: ResultsState) => (state ? state.loading : false),
);
