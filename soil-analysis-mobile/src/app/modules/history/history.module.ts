import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { pages } from './pages';
import { HistoryRoutingModule } from './history.routes';
import { components } from './components';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HistoryRoutingModule,
  ],
  declarations: [...pages, components],
})
export class HistoryPageModule {}
