import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './pages/home/home.component';
import { AnalysisRoutingModule } from './analysis.routes';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [HomeComponent, ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    AnalysisRoutingModule,
  ],
})
export class AnalysisModule {}
