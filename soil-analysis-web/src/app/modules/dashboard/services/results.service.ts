import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Result } from '../models/results.model';
import { results } from '../constants/results.constant';
import { BaseService } from '../../../shared/services/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private results: Result[];
  endpoint = 'results';
  constructor(private readonly http: BaseService<Result>) {
    this.results = results;
  }

  findAll(): Observable<any> {
    return this.http.findAll(this.endpoint);
  }

  getResults(): Result[] {
    const sorted = _.sortBy(
      this.results,
      (result: Result) => new Date(result.created)
    );
    return _.reverse(sorted);
  }
}
