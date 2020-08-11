import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';

import { MaterialModule } from '../../core/material/material.module';
import { DashboardRoutingModule } from './dashboard.routes';
import { pages } from './pages';
import { components } from './components';
import { pipes } from './pipes';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/results.reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effetcs';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [...pages, ...components, ...pipes],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    HighchartsChartModule,
    StoreModule.forFeature('results', reducer),
    EffectsModule.forFeature(effects),
  ],
})
export class DashboardModule {}
