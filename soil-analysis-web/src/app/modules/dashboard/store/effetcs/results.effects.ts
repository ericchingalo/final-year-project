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
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ResultsEffects {
  constructor(
    private actions$: Actions,
    private readonly resultsService: ResultsService,
    private readonly router: Router,
    private readonly cookieService: CookieService
  ) {}
  loadResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadResults),
      switchMap(() =>
        this.resultsService.findAll().pipe(
          map(
            (results: any[]) =>
              loadResultsSuccess({
                results: resultsSaniziter(results),
              }),
            catchError((res) => {
              if (res.status === 401) {
                this.cookieService.delete('soil-user', '/');
                this.router.navigate(['/login']);
              }
              return of(loadResultsFail({ error: getErrorMessage(res) }));
            })
          )
        )
      )
    )
  );
}
