import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateForm } from '../../../../shared/helpers/form-generator';
import { AnalysisGraphService } from '../../services/analysis-graph.service';

@Component({
  selector: 'app-analysis',
  templateUrl: 'analysis.page.html',
  styleUrls: ['analysis.page.scss'],
})
export class AnalysisPage implements OnInit {
  analysisFormData: any;
  analysisForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly analysisGraphService: AnalysisGraphService,
  ) {}

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
    console.log(formValues);
    this.plotChart();
  }

  plotChart() {
    this.analysisGraphService.plotBarChart('chart', null);
  }
}
