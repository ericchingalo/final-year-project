import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../models/results.model';
import { RegionDataCount } from '../../models/region-data-count.model';
import {
  getRegionCount,
  sanitizeRegionCountDataSeries,
} from '../../helpers/pie-chart.helper';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-region-pie-chart',
  templateUrl: './region-pie-chart.component.html',
  styleUrls: ['./region-pie-chart.component.scss'],
})
export class RegionPieChartComponent implements OnInit {
  @Input() results: Result[];

  HighCharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  regionDataCount: RegionDataCount[];
  constructor() {}

  ngOnInit() {
    this.regionDataCount = getRegionCount(this.results);
    this.chartOptions = this.getChartOptions();
  }

  getChartOptions() {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Collected Data per Region',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Data collected',
          colorByPoint: true,
          type: undefined,
          data: sanitizeRegionCountDataSeries(this.regionDataCount),
        },
      ],
    };
  }
}
