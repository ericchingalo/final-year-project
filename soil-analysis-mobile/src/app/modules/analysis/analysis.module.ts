import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { AnalysisRoutingModule } from './analysis.routes';
import { pages } from './pages';
import { components } from './components';
import { MaterialModule } from '../../core/material/material.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    AnalysisRoutingModule,
    MaterialModule,
  ],
  declarations: [...pages, ...components],
})
export class AnalysisPageModule {}
