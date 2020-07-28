import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routes';
import { pages } from './pages';
import { components } from './components';
import { MaterialModule } from '../../core/material/material.module';
import { pipes } from './pipes';
import { HighchartsChartModule } from 'highcharts-angular';

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
