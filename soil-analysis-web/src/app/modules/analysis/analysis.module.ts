import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AnalysisRoutingModule } from './analysis.routes';
import { pages } from './pages';
import { components } from './components';

@NgModule({
  declarations: [...pages, ...components],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    AnalysisRoutingModule,
  ],
})
export class AnalysisModule {}
