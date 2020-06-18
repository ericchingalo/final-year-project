import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Result } from '../../modules/history/models/results.model';
import { results } from '../constants/soil-test-data.constant';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor() {}

  getSoilResult(): Result[] {
    const sorted = _.sortBy(results, (result: Result) => result.id);
    return _.reverse(sorted);
  }
}
