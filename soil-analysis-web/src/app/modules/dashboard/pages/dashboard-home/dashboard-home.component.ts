import { Component, OnInit } from '@angular/core';
import { Result } from '../../models/results.model';
import { ResultsService } from '../../services/results.service';
import { RegionDataCount } from '../../models/region-data-count.model';

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
  }
}
