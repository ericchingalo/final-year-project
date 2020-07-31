import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Result } from '../../models/results.model';
import { FilterMetadata } from '../../models/filter-metadata.model';
import { CustomGraphParameters } from '../../models/custom-graph-parameter.model';
import { getGraphCustomParameters } from '../../helpers/custom-chart.helpers';
import { results } from '../../constants/results.constant';

@Component({
  selector: 'app-custom-chart',
  templateUrl: './custom-chart.component.html',
  styleUrls: ['./custom-chart.component.scss'],
})
export class CustomChartComponent implements OnInit, OnChanges {
  @Input() results: Result[];
  @Input() chartConfig: FilterMetadata;

  customGraphParameters: CustomGraphParameters;
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.setGraphCustomParameters();
  }

  setGraphCustomParameters() {
    this.customGraphParameters = getGraphCustomParameters(
      this.chartConfig,
      results
    );
  }
}
