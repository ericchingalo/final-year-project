import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';

import { CustomFormData } from 'src/app/shared/models/form-data.model';
import { Result } from '../../models/results.model';
import { generateForm } from 'src/app/core/helpers/form-generator.helper';
import { getDistinctRegions } from '../../helpers/pie-chart.helper';
import { FilterMetadata } from '../../models/filter-metadata.model';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent implements OnInit {
  @Input() results: Result[];
  @Output() filterData: EventEmitter<FilterMetadata> = new EventEmitter<
    FilterMetadata
  >();

  customGraphFormData: CustomFormData;
  CustomFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.customGraphFormData = this.getCustomGraphFormData();
    this.CustomFormGroup = generateForm(
      this.CustomFormGroup,
      this.customGraphFormData,
      this.fb
    );
  }

  getCustomGraphFormData(): CustomFormData {
    return {
      inputs: [
        {
          label: 'Regions',
          formControlName: 'regions',
          type: 'select',
          multiple: true,
          options: this.sanitizeRegionSelectOptions(
            getDistinctRegions(this.results)
          ),
          required: true,
        },
        {
          label: 'Parameter',
          formControlName: 'parameter',
          type: 'select',
          multiple: false,
          options: [
            {
              label: 'pH',
              value: 'pH',
            },
            {
              label: 'Moisture',
              value: 'moisture',
            },
            {
              label: 'Temperature',
              value: 'temperature',
            },
          ],
          required: true,
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

  sanitizeRegionSelectOptions(
    values: string[]
  ): { label: string; value: string }[] {
    return _.map(values, (value: string) => ({
      label: _.upperFirst(value),
      value,
    }));
  }

  generateChart() {
    const values = this.CustomFormGroup.value;
    this.filterData.emit({
      ...values,
      startDate: new Date(values.startDate),
      endDate: new Date(values.endDate),
    });
  }
}
