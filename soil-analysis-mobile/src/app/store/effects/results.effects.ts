import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadResults,
  loadResultsSuccess,
  loadResultsFail,
} from '../actions/results.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { HistoryService } from '../../shared/services/history.service';
import { User } from '../../modules/account/models/user.model';
import { AuthService } from '../../modules/launch/services/auth.service';
import { of } from 'rxjs';
import { getSanitizedErrorMessage } from '../../shared/helpers/error-message-sanitizer.helper';
import { loadCurrentUserSuccess } from '../actions/current-user.actions';
import { resultsSanitizer } from '../../shared/helpers/results-sanitizer.helper';

@Injectable()
export class ResultsEffects {
  currentUser: User;
  constructor(
    private actions$: Actions,
    private resultsService: HistoryService,
    private authService: AuthService,
  ) {
    this.currentUser = this.authService.currentUserValue;
  }

  loadResults = createEffect(() =>
    this.actions$.pipe(
      ofType(loadResults),
      mergeMap((action) => {
        this.currentUser = this.authService.currentUserValue;
        return this.resultsService.getAllResults(this.currentUser.device).pipe(
          map((results) => {
            const sanitizedResults = resultsSanitizer(
              results,
              this.currentUser.username,
            );
            return loadResultsSuccess({ results: sanitizedResults });
          }),
          catchError((res) =>
            of(loadResultsFail({ error: getSanitizedErrorMessage(res) })),
          ),
        );
      }),
    ),
  );

  getResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCurrentUserSuccess),
      map(() => loadResults()),
    ),
  );
}
