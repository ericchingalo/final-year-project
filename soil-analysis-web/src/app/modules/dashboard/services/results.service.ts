import { Injectable } from '@angular/core';
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
    return this.results;
  }
}
