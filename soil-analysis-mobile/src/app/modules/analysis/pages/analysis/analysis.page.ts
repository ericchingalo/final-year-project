import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import * as moment from 'moment';

import { generateForm } from '../../../../shared/helpers/form-generator';
import { AnalysisGraphService } from '../../services/analysis-graph.service';
import { Result } from '../../../history/models/results.model';
import { State } from '../../../../store/reducers/index';
import { getAllResults } from '../../../../store/selectors/results.selectors';
import { take } from 'rxjs/operators';
import { getGraphParameters } from '../../helpers/chart-plot.helper';
import { dataAggregator } from '../../helpers/data-aggregator.helper';

@Component({
  selector: 'app-analysis',
  templateUrl: 'analysis.page.html',
  styleUrls: ['analysis.page.scss'],
})
export class AnalysisPage implements OnInit, OnChanges {
  results: Result[];
  analysisFormData: any;
  analysisForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly analysisGraphService: AnalysisGraphService,
    private store: Store<State>,
  ) {}

  ngOnInit() {
    this.analysisFormData = this.getFormData();
    this.analysisForm = generateForm(
      this.analysisForm,
      this.analysisFormData,
      this.formBuilder,
    );
    this.getResults();
  }

  ngOnChanges() {
    this.getResults();
  }

  getResults() {
    this.store
      .select(getAllResults)
      .pipe(take(4))
      .subscribe((results: Result[]) => (this.results = results));
  }

  getFormData() {
    return {
      inputs: [
        {
          type: 'select',
          formControlName: 'parameters',
          label: 'Parameter',
          required: true,
          options: ['pH', 'moisture', 'temperature'],
        },
        {
          type: 'date',
          required: true,
          formControlName: 'startDate',
          label: 'Start Date',
        },
        {
          type: 'date',
          required: true,
          formControlName: 'endDate',
          label: 'End Date',
        },
      ],
    };
  }

  onAnalysisFormSubmit(formValues: any) {
    const graphData = getGraphParameters(
      _.omit(formValues, 'charts'),
      dataAggregator(this.results),
    );

    const sanitizedGraphData = {
      ...graphData,
      tooltipSuffix:
        formValues.parameters === 'moisture'
          ? ' %'
          : formValues.parameters === 'temperature'
          ? ' Celcius'
          : '',
      ytitle: formValues.parameters,
      title: `${
        formValues.parameters === 'pH'
          ? formValues.parameters
          : _.upperFirst(formValues.parameters)
      } recorded from ${moment(formValues.startDate).format(
        'YYYY-MM-DD',
      )} to ${moment(formValues.endDate).format('YYYY-MM-DD')}`,
    };
    this.plotChart(formValues.parameters, sanitizedGraphData);
  }

  plotChart(chart: string, graphData: any) {
    if (chart !== 'temperature') {
      this.analysisGraphService.plotBarChart('chart', graphData);
    } else {
      this.analysisGraphService.plotLineChart('chart', graphData);
    }
  }
}
