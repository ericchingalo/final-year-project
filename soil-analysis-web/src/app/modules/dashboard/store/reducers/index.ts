import * as fromRoot from 'src/app/store/reducers';
import * as fromResults from '../states/results.state';
import { ActionReducerMap } from '@ngrx/store';
import { ResultsReducer } from './results.reducers';

export interface ResultsFeatureState {
  results: fromResults.ResultsState;
}

/**
 * create feature state
 */
export interface State extends fromRoot.State {
  results: ResultsFeatureState;
}

export const reducers: ActionReducerMap<ResultsFeatureState> = {
  results: ResultsReducer,
};
