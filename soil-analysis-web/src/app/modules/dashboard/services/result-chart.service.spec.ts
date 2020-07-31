import { TestBed } from '@angular/core/testing';

import { ResultChartService } from './result-chart.service';

describe('ResultChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultChartService = TestBed.get(ResultChartService);
    expect(service).toBeTruthy();
  });
});
