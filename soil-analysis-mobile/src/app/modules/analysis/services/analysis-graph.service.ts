import { Injectable } from '@angular/core';
import * as HighCharts from 'highcharts';

@Injectable({ providedIn: 'root' })
export class AnalysisGraphService {
  constructor() {}

  plotBarChart(chart: string, data: any) {
    return HighCharts.chart(chart, {
      chart: {
        type: 'column',
        zoomType: 'xy',
      },
      title: {
        text: 'Covid-19 new cases in Tanzania',
      },
      subtitle: {
        text: 'Source: https://covid19api.com',
      },
      xAxis: {
        //   categories: getCountryDataPeriods(data),
        //   tickmarkPlacement: 'on',
        //   title: {
        //     text: 'Dates',
        //   },
        accessibility: {
          rangeDescription: 'Range: 2009 to 2017',
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of people',
          align: 'high',
        },
      },
      tooltip: {
        valueSuffix: ' people',
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666',
          },
        },
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                enabled: false,
              },
            },
          },
        ],
      },
      series: [
        //   {
        //     type: undefined,
        //     name: 'covid-19 new cases',
        //     data: getNewCasesData(data),
        //   },
        {
          type: undefined,
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
          type: undefined,
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
        {
          type: undefined,
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        },
      ],
      exporting: {
        enabled: true,
      },
    });
  }

  plotLineChart(chart: string, data: any) {
    return HighCharts.chart(chart, {
      chart: {
        type: 'line',
        zoomType: 'xy',
      },
      title: {
        text: 'Covid-19 confirmed cases in Tanzania ',
      },
      subtitle: {
        text: 'Source: https://covid19api.com',
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },
      xAxis: {
        //   categories: getCountryDataPeriods(data),
        //   tickmarkPlacement: 'on',
        //   title: {
        //     text: 'Dates',
        //   },
        accessibility: {
          rangeDescription: 'Range: 2009 to 2017',
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of people',
          align: 'high',
        },
      },
      tooltip: {
        valueSuffix: ' people',
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
        },
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },

      series: [
        //   {
        //     type: undefined,
        //     name: 'covid-19 confirmed cases',
        //     data: getConfirmedData(data),
        //   },
        {
          type: undefined,
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
          type: undefined,
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
        {
          type: undefined,
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        },
      ],
      exporting: {
        enabled: true,
      },
    });
  }
}
