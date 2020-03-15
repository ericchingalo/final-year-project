import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { AnalysisRoutingModule } from './analysis.routes';
import { pages } from './pages';
import { components } from './components';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AnalysisRoutingModule,
  ],
  declarations: [...pages, ...components],
})
export class AnalysisPageModule {}
