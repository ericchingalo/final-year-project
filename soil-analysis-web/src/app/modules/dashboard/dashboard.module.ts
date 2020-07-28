import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';

import { MaterialModule } from '../../core/material/material.module';
import { DashboardRoutingModule } from './dashboard.routes';
import { pages } from './pages';
import { components } from './components';
import { pipes } from './pipes';

@NgModule({
  declarations: [...pages, ...components, ...pipes],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HighchartsChartModule,
  ],
})
export class DashboardModule {}
