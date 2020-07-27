import { TestBed } from '@angular/core/testing';

import { PlotterService } from './plotter.service';

describe('PlotterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlotterService = TestBed.get(PlotterService);
    expect(service).toBeTruthy();
  });
});
