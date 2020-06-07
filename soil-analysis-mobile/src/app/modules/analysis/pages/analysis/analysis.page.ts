import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateForm } from '../../../../shared/helpers/form-generator';

@Component({
  selector: 'app-analysis',
  templateUrl: 'analysis.page.html',
  styleUrls: ['analysis.page.scss'],
})
export class AnalysisPage implements OnInit {
  analysisFormData: any;
  analysisForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.analysisFormData = this.getFormData();
    this.analysisForm = generateForm(
      this.analysisForm,
      this.analysisFormData,
      this.formBuilder,
    );
  }

  getFormData() {
    return {
      inputs: [
        {
          type: 'select',
          formControlName: 'charts',
          label: 'Chart type',
          options: ['bar', 'line'],
        },
        {
          type: 'select',
          formControlName: 'parameter',
          label: 'Parameter',
          options: ['pH', 'moisture', 'temperature'],
        },
        {
          type: 'date',
          formControlName: 'startDate',
          label: 'Start Date',
        },
        {
          type: 'date',
          formControlName: 'endDate',
          label: 'End Date',
        },
      ],
    };
  }

  onAnalysisFormSubmit(formValues: any) {
    this.barChartPopulation();
  }

  barChartPopulation() {
    HighCharts.chart('barChart', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Historic World PbarChartPopulationopulation by Region',
      },
      xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)',
          align: 'high',
        },
      },
      tooltip: {
        valueSuffix: ' millions',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          type: undefined,
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2],
        },
        {
          type: undefined,
          name: 'Year 1900',
          data: [133, 156, 947, 408, 6],
        },
        {
          type: undefined,
          name: 'Year 2000',
          data: [814, 841, 3714, 727, 31],
        },
        {
          type: undefined,
          name: 'Year 2016',
          data: [1216, 1001, 4436, 738, 40],
        },
      ],
    });
  }
}
