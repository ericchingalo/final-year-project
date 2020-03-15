import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { pages } from './pages';
import { AccountRoutingModule } from './account.routes';
import { components } from './components';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AccountRoutingModule,
  ],
  declarations: [...pages, ...components],
})
export class AccountPageModule {}
