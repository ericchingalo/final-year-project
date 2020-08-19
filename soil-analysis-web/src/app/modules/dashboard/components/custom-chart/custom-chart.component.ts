import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

import { Result } from '../../models/results.model';
import { FilterMetadata } from '../../models/filter-metadata.model';
import { CustomGraphParameters } from '../../models/custom-graph-parameter.model';
import { getGraphCustomParameters } from '../../helpers/custom-chart.helpers';
import { aggregrateDailyRegionData } from '../../helpers/daily-region-data-aggregator.helper';

@Component({
  selector: 'app-custom-chart',
  templateUrl: './custom-chart.component.html',
  styleUrls: ['./custom-chart.component.scss'],
})
export class CustomChartComponent implements OnInit, OnChanges {
  @Input() results: Result[];
  @Input() chartConfig: FilterMetadata;

  HighCharts: typeof Highcharts = Highcharts;
  updatingChart = true;
  chartOptions: Highcharts.Options;
  customGraphParameters: CustomGraphParameters;
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.setGraphCustomParameters();
    this.setChartOptions();
    HC_exporting(Highcharts);
  }

  setGraphCustomParameters() {
    this.updatingChart = true;
    const data = aggregrateDailyRegionData(this.results);
    this.customGraphParameters = getGraphCustomParameters(
      this.chartConfig,
      data
    );

    setTimeout(() => {
      this.updatingChart = false;
    }, 50);
  }

  setChartOptions() {
    this.chartOptions = this.plotChart();
  }

  plotChart(): Highcharts.Options {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type:
          this.chartConfig.parameter === 'pH'
            ? 'areaspline'
            : this.chartConfig.parameter === 'moisture'
            ? 'column'
            : 'line',
      },
      title: {
        text: this.customGraphParameters.title,
        style: {
          fontSize: '14px',
        },
      },

      yAxis: {
        title: {
          text: this.chartConfig.parameter,
        },
        min: 0,
      },
      xAxis: {
        categories: this.customGraphParameters.periods,
        tickmarkPlacement: 'on',
        title: {
          text: 'Months',
        },
        startOnTick: true,
      },
      tooltip: {
        valueSuffix:
          this.chartConfig.parameter === 'pH'
            ? ''
            : this.chartConfig.parameter === 'moisture'
            ? ' %'
            : ' C',
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      series: this.customGraphParameters.series,
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5,
        },
        series: {
          label: {
            connectorAllowed: true,
          },
        },
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
    };
  }
}
