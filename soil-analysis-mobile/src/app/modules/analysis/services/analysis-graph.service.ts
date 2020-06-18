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
        text: 'Source: Soil Analysis application',
      },
      xAxis: {
        categories: data.periods,
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
      series: data.series,
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
        text: 'Source: Soil Analysis application',
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },
      xAxis: {
        categories: data.periods,
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

      series: data.series,
      exporting: {
        enabled: true,
      },
    });
  }
}
