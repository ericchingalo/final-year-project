import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../models/results.model';
import * as Highcharts from 'highcharts';
import { CountrySummaryData } from '../../models/country-summary-data.model';
import { countryDataSummarySanitizer } from '../../helpers/country-summary-data-sanitizer.helper';
import { aggregateDataToCountry } from '../../helpers/data-aggregator.helper';

@Component({
  selector: 'app-country-moisture-summary',
  templateUrl: './country-moisture-summary.component.html',
  styleUrls: ['./country-moisture-summary.component.scss'],
})
export class CountryMoistureSummaryComponent implements OnInit {
  @Input() results: Result[];

  HighCharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  moistureResults: CountrySummaryData;

  constructor() {}

  ngOnInit() {
    this.moistureResults = countryDataSummarySanitizer(
      aggregateDataToCountry(this.results, 'moisture')
    );
    this.chartOptions = this.generateColumnGraph();
  }

  generateColumnGraph(): Highcharts.Options {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'column',
      },
      title: {
        text: 'Average Soil Moisture in Tanzania for the Past 6 Months',
      },

      yAxis: {
        title: {
          text: 'moisture',
        },
        min: 0,
      },
      xAxis: {
        categories: this.moistureResults.periods,
        tickmarkPlacement: 'on',
        title: {
          text: 'Months',
        },
        startOnTick: true,
      },
      tooltip: {
        valueSuffix: ' %',
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'moisture',
          type: undefined,
          data: this.moistureResults.data,
        },
      ],
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
    };
  }
}
