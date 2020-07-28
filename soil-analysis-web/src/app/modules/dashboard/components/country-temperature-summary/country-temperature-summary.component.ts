import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../models/results.model';
import * as Highcharts from 'highcharts';
import { CountrySummaryData } from '../../models/country-summary-data.model';
import { countryDataSummarySanitizer } from '../../helpers/country-summary-data-sanitizer.helper';
import { aggregateDataToCountry } from '../../helpers/data-aggregator.helper';

@Component({
  selector: 'app-country-temperature-summary',
  templateUrl: './country-temperature-summary.component.html',
  styleUrls: ['./country-temperature-summary.component.scss'],
})
export class CountryTemperatureSummaryComponent implements OnInit {
  @Input() results: Result[];

  HighCharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  temperatureResults: CountrySummaryData;
  constructor() {}

  ngOnInit() {
    this.temperatureResults = countryDataSummarySanitizer(
      aggregateDataToCountry(this.results, 'temperature')
    );
    this.chartOptions = this.generateLineGraph();
  }

  generateLineGraph(): Highcharts.Options {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'line',
      },
      title: {
        text: 'Average Soil Temperature in Tanzania for the Past 6 Months',
      },

      yAxis: {
        title: {
          text: 'temperature',
        },
        min: 0,
      },
      xAxis: {
        categories: this.temperatureResults.periods,
        tickmarkPlacement: 'on',
        title: {
          text: 'Months',
        },
        startOnTick: true,
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: true,
          },
        },
      },
      tooltip: {
        valueSuffix: ' C',
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'temperature',
          type: undefined,
          data: this.temperatureResults.data,
        },
      ],
    };
  }
}
