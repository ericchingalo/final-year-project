import { Component, OnInit } from '@angular/core';

import { Result } from '../../models/results.model';
import { ResultsService } from '../../services/results.service';
import { RegionDataCount } from '../../models/region-data-count.model';
import { FilterMetadata } from '../../models/filter-metadata.model';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
})
export class DashboardHomeComponent implements OnInit {
  results: Result[];
  regionDataCount: RegionDataCount[];
  constructor(private readonly resultsService: ResultsService) {}

  ngOnInit() {
    this.results = this.resultsService.getResults();
    this.resizeWindow();
  }

  resizeWindow() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  onFilterData(data: FilterMetadata) {
    console.log(data);
  }
}
