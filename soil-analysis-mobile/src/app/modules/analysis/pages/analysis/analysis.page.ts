import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FormBuilder, FormGroup } from '@angular/forms';

import { generateForm } from '../../../../shared/helpers/form-generator';
import { AnalysisGraphService } from '../../services/analysis-graph.service';
import { HistoryService } from '../../../../shared/services/history.service';

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
    private readonly historyService: HistoryService,
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
          formControlName: 'parameters',
          label: 'Parameters',
          multiple: true,
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
    const graphData = this.historyService.getGraphParameters(
      _.omit(formValues, 'charts'),
    );
    this.plotChart(formValues.charts, graphData);
  }

  plotChart(chart: string, graphData: any) {
    if (chart === 'bar') {
      this.analysisGraphService.plotBarChart('chart', graphData);
    } else {
      this.analysisGraphService.plotLineChart('chart', graphData);
    }
  }
}
