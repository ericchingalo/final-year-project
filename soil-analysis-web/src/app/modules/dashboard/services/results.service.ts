import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Result } from '../models/results.model';
import { results } from '../constants/results.constant';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private results: Result[];
  constructor() {
    this.results = results;
  }

  getResults(): Result[] {
    const sorted = _.sortBy(
      this.results,
      (result: Result) => new Date(result.created)
    );
    return _.reverse(sorted);
  }
}
