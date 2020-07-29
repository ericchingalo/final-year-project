import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../models/results.model';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

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
    HC_exporting(Highcharts);
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
        style: {
          fontSize: '14px',
        },
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

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'horizontal',
              },
              yAxis: {
                labels: {
                  align: 'left',
                  x: 0,
                  y: -5,
                },
                title: {
                  text: null,
                },
              },
              subtitle: {
                text: null,
              },
              credits: {
                enabled: false,
              },
            },
          },
        ],
      },
    };
  }
}
