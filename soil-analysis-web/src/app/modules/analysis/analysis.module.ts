import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AnalysisRoutingModule } from './analysis.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AnalysisRoutingModule],
})
export class AnalysisModule {}
