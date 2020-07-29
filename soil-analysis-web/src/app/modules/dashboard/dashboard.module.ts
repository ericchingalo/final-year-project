import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';

import { MaterialModule } from '../../core/material/material.module';
import { DashboardRoutingModule } from './dashboard.routes';
import { pages } from './pages';
import { components } from './components';
import { pipes } from './pipes';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterFormComponent } from './components/filter-form/filter-form.component';

@NgModule({
  declarations: [...pages, ...components, ...pipes, FilterFormComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HighchartsChartModule,
  ],
})
export class DashboardModule {}
