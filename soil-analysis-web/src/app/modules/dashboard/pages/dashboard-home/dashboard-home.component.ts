import { Component, OnInit, OnChanges } from '@angular/core';

import { Result } from '../../models/results.model';
import { RegionDataCount } from '../../models/region-data-count.model';
import { FilterMetadata } from '../../models/filter-metadata.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { getAllResults } from '../../store/selectors/results.selector';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
})
export class DashboardHomeComponent implements OnInit, OnChanges {
  results$: Observable<Result[]>;
  regionDataCount: RegionDataCount[];
  showCustomGraph: boolean;
  customGraphConfig: FilterMetadata;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.results$ = this.store.select(getAllResults);
    this.resizeWindow();
    this.showCustomGraph = false;
  }

  ngOnChanges() {
    this.results$ = this.store.select(getAllResults);
  }

  resizeWindow() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  onFilterData(data: FilterMetadata) {
    this.showCustomGraph = true;
    this.customGraphConfig = data;
  }
}
