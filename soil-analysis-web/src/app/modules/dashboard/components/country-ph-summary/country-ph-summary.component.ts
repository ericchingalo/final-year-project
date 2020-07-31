import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../models/results.model';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

import { CountrySummaryData } from '../../models/country-summary-data.model';
import { aggregateDataToCountry } from '../../helpers/data-aggregator.helper';
import { countryDataSummarySanitizer } from '../../helpers/country-summary-data-sanitizer.helper';

@Component({
  selector: 'app-country-ph-summary',
  templateUrl: './country-ph-summary.component.html',
  styleUrls: ['./country-ph-summary.component.scss'],
})
export class CountryPHSummaryComponent implements OnInit {
  @Input() results: Result[];

  HighCharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  pHResults: CountrySummaryData;

  constructor() {}

  ngOnInit() {
    this.pHResults = countryDataSummarySanitizer(
      aggregateDataToCountry(this.results, 'pH')
    );
    this.chartOptions = this.generateAreaGraph();
    HC_exporting(Highcharts);
  }

  generateAreaGraph(): Highcharts.Options {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'areaspline',
      },
      title: {
        text: 'Average pH In Tanzania For The Past 6 Months',
        style: {
          fontSize: '14px',
        },
      },

      yAxis: {
        title: {
          text: 'pH levels',
        },
        min: 0,
      },
      xAxis: {
        categories: this.pHResults.periods,
        tickmarkPlacement: 'on',
        title: {
          text: 'Months',
        },
        startOnTick: true,
      },
      tooltip: {
        valueSuffix: '',
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'pH',
          type: undefined,
          data: this.pHResults.data,
        },
      ],
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5,
        },
      },
    };
  }
}
