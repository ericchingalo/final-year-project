import { createSelector } from '@ngrx/store';
import { getResultsState, selectAllResults } from '../states/results.state';

export const getAllResults = createSelector(getResultsState, selectAllResults);
