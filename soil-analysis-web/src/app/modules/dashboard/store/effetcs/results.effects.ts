import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ResultsService } from '../../services/results.service';
import {
  loadResults,
  loadResultsSuccess,
  loadResultsFail,
} from '../actions/results.actions';
import { getErrorMessage } from '../../../../shared/helpers/error-message.helper';
import { resultsSaniziter } from '../../helpers/results-sanitizer.helper';
import { aggregrateDailyRegionData } from '../../helpers/daily-region-data-aggregator.helper';

@Injectable()
export class ResultsEffects {
  constructor(
    private actions$: Actions,
    private readonly resultsService: ResultsService
  ) {}
  loadResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadResults),
      switchMap(() =>
        this.resultsService.findAll().pipe(
          map(
            (results: any[]) =>
              loadResultsSuccess({
                results: aggregrateDailyRegionData(resultsSaniziter(results)),
              }),
            catchError((res) =>
              of(loadResultsFail({ error: getErrorMessage(res) }))
            )
          )
        )
      )
    )
  );
}
