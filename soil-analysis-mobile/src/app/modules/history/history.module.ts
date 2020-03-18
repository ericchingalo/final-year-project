import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { pages } from './pages';
import { HistoryRoutingModule } from './history.routes';
import { components } from './components';
import { SharedModule } from '../../shared/shared.module';
import { TimePipe } from './pipes/time.pipe';
import { MaterialModule } from '../../core/material/material.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HistoryRoutingModule,
    SharedModule,
    MaterialModule,
  ],
  declarations: [...pages, ...components, TimePipe],
})
export class HistoryPageModule {}
