import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Result } from '../models/results.model';
import { BaseService } from '../../../shared/services/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  endpoint = 'results';
  constructor(private readonly http: BaseService<Result>) {}

  findAll(): Observable<any> {
    return this.http.findAll(this.endpoint);
  }
}
